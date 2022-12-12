import { addFeatures, IGeometry } from '@esri/arcgis-rest-feature-layer'
import axios from 'axios'
import { number } from 'yup'

export interface GeneralServiceFormat {
	NOME: string
	TELEFONE: number
	LOGRADOURO: string
	BAIRRO: string
	CIDADE: string
	CPF: number
	COMPLEMENT: string
	PONTO_DE_R: string
	SERVIÇO: string
	TIPO: string
	ENDEREÇO: string
	ESPECIFICA: string
	TEMPO: string
	NUMERO: number
	CEP: string
	OBSERVACAO: string
	PROTOCOLO: string
}

interface Coords {
	latitude: number
	longitude: number
}

export interface CadastrarEmpresaFormat {
	name: string
	address: string
	phoneNumbe: string
	TIPO_ESTAB: string
}

export const sendData = async (
	coords: Coords,
	attributes: Object,
	url = 'https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/Servi%c3%a7os_P%c3%bablicos/FeatureServer/0',
) => {
	return addFeatures({
		url,
		features: [
			{
				geometry: {
					x: coords.latitude,
					y: coords.longitude,
					spatialReference: { wkid: 4326 },
				} as IGeometry,
				attributes,
			},
		],
	})
}

interface TokenResponseInterface {
	access_token: string
	expires_in: number
}

export function generateToken(): Promise<string> {
	const url =
		'https://www.arcgis.com/sharing/rest/oauth2/token?client_id=sAjckUd1BWxEu6Ia&grant_type=client_credentials&client_secret=661021cedd3247648915fbb04df4a90b'
	return axios
		.post(url)
		.then(res => {
			const data = res.data as TokenResponseInterface
			return data.access_token
		})
		.catch(err => {
			throw new Error('Erro ao gerar token de acesso')
		})
}

interface Geometry {
	x: number
	y: number
}

export interface Estabelecimento {
	attributes: {
		FID: number
		OBJECTID: number
		name: string
		address: string
		phoneNumbe: string
		snippet: string
		lat: number
		long: number
		TIPO_ESTAB: string
	}
	geometry: Geometry
}

interface EstabelecimentoFeatureDataReturnInterface {
	fields: {
		name: string
		alias: string
		type: string
		[key: string]: any
	}
	features: Estabelecimento[]
}
interface RequestProps {
	fields: {
		name: string
		alias: string
		type: string
		[key: string]: any
	}
	features: Estabelecimento[]
}

export function obterTodosEstabelecimentos(
	token: string,
): Promise<EstabelecimentoFeatureDataReturnInterface> {
	return axios
		.get(
			`https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/Estabelecimentos/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=${token}`,
		)
		.then(res => {
			const data = res.data as EstabelecimentoFeatureDataReturnInterface
			return data
		})
		.catch(err => {
			throw new Error('Erro ao buscar os estabelecimentos')
		})
}

export async function getRequestByProtocol(protocol: string) {
	const token = await generateToken()
	return axios
		.get(
			`https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/Servi%c3%a7os_P%c3%bablicos/FeatureServer/0/query?where=PROTOCOLO%3D%27${protocol}%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=${token}`,
		)
		.then(res => {
			const data = res.data.features as any[]
			return data
		})
		.catch(err => {
			throw new Error('Erro ao buscar os estabelecimentos')
		})
}

// Consultar NIS

export interface PessoaFisicaDataReturn {
	attributes: {
		NU_NIS_RF: number
		NOME_RF: string
		LOGRADOURO: string
		CIDADE: string
		ObjectId: number
	}
	geometry: Geometry
}

export async function obterPessoasPorNis(nis: string) {
	const token = await generateToken()
	return axios
		.get(
			`https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/Assistencia/FeatureServer/0/query?where=NU_NIS_RF%3D${nis}&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=${token}`,
		)
		.then(res => {
			const data = res.data.features as PessoaFisicaDataReturn[]
			return data
		})
		.catch(err => {
			throw new Error('Erro ao buscar os estabelecimentos')
		})
}

export interface CalendarioAssitenciaDataFormat {
	attributes: {
		FINAL_DO_NIS: number
		MÊS: string
		DATA: number
		CIDADE: string
	}
}

export interface AssistenciaData {
	mes: string
	dia: string
}

export function obterListaDePagamentosDoAno(nis: string): AssistenciaData[] {
	const lastChar = nis.substring(nis.length - 1)
	if (lastChar === '0') {
		return [
			{ mes: '01', dia: '31' },
			{ mes: '02', dia: '25' },
			{ mes: '03', dia: '31' },
			{ mes: '04', dia: '29' },
			{ mes: '05', dia: '31' },
			{ mes: '06', dia: '30' },
			{ mes: '07', dia: '29' },
			{ mes: '08', dia: '31' },
			{ mes: '09', dia: '30' },
			{ mes: '10', dia: '31' },
			{ mes: '11', dia: '30' },
			{ mes: '12', dia: '23' },
		]
	} else if (lastChar === '1') {
		return [
			{ mes: '01', dia: '18' },
			{ mes: '02', dia: '14' },
			{ mes: '03', dia: '18' },
			{ mes: '04', dia: '14' },
			{ mes: '05', dia: '18' },
			{ mes: '06', dia: '17' },
			{ mes: '07', dia: '18' },
			{ mes: '08', dia: '18' },
			{ mes: '09', dia: '19' },
			{ mes: '10', dia: '18' },
			{ mes: '11', dia: '17' },
			{ mes: '12', dia: '12' },
		]
	} else if (lastChar === '2') {
		return [
			{ mes: '01', dia: '19' },
			{ mes: '02', dia: '15' },
			{ mes: '03', dia: '21' },
			{ mes: '04', dia: '18' },
			{ mes: '05', dia: '19' },
			{ mes: '06', dia: '20' },
			{ mes: '07', dia: '19' },
			{ mes: '08', dia: '19' },
			{ mes: '09', dia: '20' },
			{ mes: '10', dia: '19' },
			{ mes: '11', dia: '18' },
			{ mes: '12', dia: '13' },
		]
	} else if (lastChar === '3') {
		return [
			{ mes: '01', dia: '20' },
			{ mes: '02', dia: '16' },
			{ mes: '03', dia: '22' },
			{ mes: '04', dia: '19' },
			{ mes: '05', dia: '20' },
			{ mes: '06', dia: '21' },
			{ mes: '07', dia: '20' },
			{ mes: '08', dia: '22' },
			{ mes: '09', dia: '21' },
			{ mes: '10', dia: '20' },
			{ mes: '11', dia: '21' },
			{ mes: '12', dia: '14' },
		]
	} else if (lastChar === '4') {
		return [
			{ mes: '01', dia: '21' },
			{ mes: '02', dia: '17' },
			{ mes: '03', dia: '23' },
			{ mes: '04', dia: '20' },
			{ mes: '05', dia: '23' },
			{ mes: '06', dia: '22' },
			{ mes: '07', dia: '21' },
			{ mes: '08', dia: '23' },
			{ mes: '09', dia: '22' },
			{ mes: '10', dia: '21' },
			{ mes: '11', dia: '22' },
			{ mes: '12', dia: '15' },
		]
	} else if (lastChar === '5') {
		return [
			{ mes: '01', dia: '24' },
			{ mes: '02', dia: '18' },
			{ mes: '03', dia: '24' },
			{ mes: '04', dia: '22' },
			{ mes: '05', dia: '24' },
			{ mes: '06', dia: '23' },
			{ mes: '07', dia: '22' },
			{ mes: '08', dia: '24' },
			{ mes: '09', dia: '23' },
			{ mes: '10', dia: '24' },
			{ mes: '11', dia: '23' },
			{ mes: '12', dia: '16' },
		]
	} else if (lastChar === '6') {
		return [
			{ mes: '01', dia: '25' },
			{ mes: '02', dia: '21' },
			{ mes: '03', dia: '25' },
			{ mes: '04', dia: '25' },
			{ mes: '05', dia: '25' },
			{ mes: '06', dia: '24' },
			{ mes: '07', dia: '25' },
			{ mes: '08', dia: '25' },
			{ mes: '09', dia: '26' },
			{ mes: '10', dia: '25' },
			{ mes: '11', dia: '24' },
			{ mes: '12', dia: '19' },
		]
	} else if (lastChar === '7') {
		return [
			{ mes: '01', dia: '26' },
			{ mes: '02', dia: '22' },
			{ mes: '03', dia: '28' },
			{ mes: '04', dia: '26' },
			{ mes: '05', dia: '26' },
			{ mes: '06', dia: '27' },
			{ mes: '07', dia: '26' },
			{ mes: '08', dia: '26' },
			{ mes: '09', dia: '27' },
			{ mes: '10', dia: '26' },
			{ mes: '11', dia: '25' },
			{ mes: '12', dia: '20' },
		]
	} else if (lastChar === '8') {
		return [
			{ mes: '01', dia: '27' },
			{ mes: '02', dia: '23' },
			{ mes: '03', dia: '29' },
			{ mes: '04', dia: '27' },
			{ mes: '05', dia: '27' },
			{ mes: '06', dia: '28' },
			{ mes: '07', dia: '27' },
			{ mes: '08', dia: '29' },
			{ mes: '09', dia: '28' },
			{ mes: '10', dia: '27' },
			{ mes: '11', dia: '28' },
			{ mes: '12', dia: '21' },
		]
	} else if (lastChar === '9') {
		return [
			{ mes: '01', dia: '28' },
			{ mes: '02', dia: '24' },
			{ mes: '03', dia: '30' },
			{ mes: '04', dia: '28' },
			{ mes: '05', dia: '30' },
			{ mes: '06', dia: '29' },
			{ mes: '07', dia: '28' },
			{ mes: '08', dia: '30' },
			{ mes: '09', dia: '29' },
			{ mes: '10', dia: '28' },
			{ mes: '11', dia: '29' },
			{ mes: '12', dia: '22' },
		]
	} else {
		return []
	}
}

export function obterProxDiaPagamento(nis: string): AssistenciaData {
	const dias = obterListaDePagamentosDoAno(nis)
	const hoje = new Date()
	const dia = dias.filter(x => {
		if (
			Number(x.mes) > hoje.getMonth() + 1 ||
			(Number(x.mes) === hoje.getMonth() + 1 && Number(x.dia) >= hoje.getDate())
		) {
			return true
		} else {
			return false
		}
	})[0]
	return dia || dias[0]
}

export interface GeocodeLocationToAddressData {
	address: {
		Match_addr: string
		LongLabel: string
		ShortLabel: string
		Addr_type: string
		Place_addr: string
		StName: string
		Type: string
		Placename: string
		AddNum: string
		Address: string
		Block: string
		Sector: string
		Neighborhood: string
		District: string
		City: string
		MetroArea: string
		Subregion: string
		Region: string
		RegionAbbr: string
		Territory: string
		Postal: string
		PostalExt: string
		CntryName: string
		CountryCode: string
	}
	location: {
		x: number
		y: number
	}
}

export async function locationToAddress(coords: Coords): Promise<GeocodeLocationToAddressData> {
	return axios
		.get(
			`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${coords.longitude},${coords.latitude}&outFields=*&locationType=street&outSR=4326`,
		)
		.then(res => {
			const data = res.data as GeocodeLocationToAddressData
			return data
		})
		.catch(err => {
			throw new Error(err)
		})
}

interface GeocodeAddressToLocationData {
	address: string
	location: {
		x: number
		y: number
	}
	score: number
	attributes: {
		Match_addr: string
		LongLabel: string
		ShortLabel: string
		PlaceName: string
		Place_addr: string
		City: string
		Postal: string
		ExInfo: string
	}
}

export async function addressToLocations(matchAddr: string): Promise<GeocodeAddressToLocationData> {
	return axios
		.get(
			`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?address=${matchAddr}&outFields=*&f=json`,
		)
		.then(res => {
			const data = res.data.candidates as GeocodeAddressToLocationData
			return data
		})
		.catch(err => {
			throw new Error(err)
		})
}

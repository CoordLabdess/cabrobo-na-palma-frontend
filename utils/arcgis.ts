import { addFeatures, IGeometry } from '@esri/arcgis-rest-feature-layer'
import axios from 'axios'

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
	geometry: {
		x: number
		y: number
	}
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

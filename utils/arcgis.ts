import { addFeatures, IGeometry } from '@esri/arcgis-rest-feature-layer'

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
	url = 'https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/Servi%c3%a7os_P%c3%bablicos/FeatureServer/0'
) => {
	return addFeatures({
		url,
		features: [
			{
				geometry: {
					x: coords.latitude,
					y: coords.longitude,
					spatialReference: { wkid: 4326 }
				} as IGeometry,
				attributes
			}
		]
	})
}

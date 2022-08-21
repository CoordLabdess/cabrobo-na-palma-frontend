import { addFeatures, IGeometry } from '@esri/arcgis-rest-feature-layer'

interface Coords {
	latitude: number
	longitude: number
}

export const sendData = async (coords: Coords, url: string, attributes: Object) => {
	return addFeatures({
		url,
		features: [
			{
				geometry: {
					x: coords.longitude,
					y: coords.latitude,
					spatialReference: { wkid: 4326 }
				} as IGeometry,
				attributes
			}
		]
	})
}

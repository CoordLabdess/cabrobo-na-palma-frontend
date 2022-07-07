export interface Tool extends Categorical {
	id: number
	img: string
	navigateTo: string
	title: string
	alias: string
	majorServicesIds: number[]
}

export interface MajorService extends Categorical {
	id: number
	title: string
	alias: string
	img: string
	minorServicesId: number[]
}

export interface MinorService extends Categorical {
	id: number
	title: string
	alias: string
	img: string
	formId?: number
}

interface Categorical {
	category: 'Tool' | 'MajorService' | 'MinorService'
}

export interface RouteProp {
	params: { serviceId: number; serviceType: string; serviceTitle: string }
}

export interface Coords {
	latitude: number
	longitude: number
}

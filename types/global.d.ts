export interface Tool extends Categorical {
	id: number
	img: string
	img2: string
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
	img2: string
	minorServicesId: number[]
}

export interface MinorService extends Categorical {
	id: number
	title: string
	alias: string
	img: string
	formId?: number
}

export interface ServiceForm {
	id: number
	title: string
	mapFeatures: string[]
	pages: FormPage[]
}

export interface FormPage {
	index: number
	sections: FormSection[]
}

interface FormSection {
	title?: string
	elements: FormElement[]
}

export interface FormElement {
	id: number
	title: string
	alias: string
	placeHolder?: string
	type: FormElementType
	value: string | number | boolean
}

export type FormElementType = 'TextInput' | 'TextArea' | 'CheckBox' | 'Image'
interface Categorical {
	category: 'Tool' | 'MajorService' | 'MinorService'
}

export interface RouteProp {
	params: { serviceId: number; serviceType: string; serviceTitle: string; step: number }
}

export interface Coords {
	latitude: number
	longitude: number
}

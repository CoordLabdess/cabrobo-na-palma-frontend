export interface MinorServiceForm {
	minorServiceId: number
	pages: FormPage[]
}

export interface FormPage {
	title: string
	index: number
	sections: FormSection[]
}

export interface FormSection {
	title: string
	uniqueBooleanValue?: boolean
	fields: FormField[]
}

export interface FormField {
	label: string
	alias: string
	type: FormFieldType
	value: string | boolean
}

export type FormFieldType = 'textInput' | 'checkBox' | 'textArea' | 'file' | 'map' | 'radioButton'

export const allMinorServicesForm: MinorServiceForm[] = [
	{
		minorServiceId: 1,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true
							}
						]
					}
				]
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						fields: [
							{
								label: 'Endereço',
								alias: 'endereco',
								type: 'textInput',
								value: ''
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: ''
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: ''
							},
							{
								label: 'Complemento',
								alias: 'complemento',
								type: 'textInput',
								value: ''
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: ''
							},
							{
								label: 'Número do Poste',
								alias: 'numeroDoPoste',
								type: 'textInput',
								value: ''
							}
						]
					}
				]
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueBooleanValue: true,
						fields: [
							{
								label: 'Lâmpada sempre acesa',
								alias: 'lampadaSempreAcesa',
								type: 'radioButton',
								value: false
							},
							{
								label: 'Lâmpada intermitente',
								alias: 'lampadaIntermitente',
								type: 'radioButton',
								value: false
							},
							{
								label: 'Lâmpada apagada',
								alias: 'lampadaApagada',
								type: 'radioButton',
								value: false
							}
						]
					},
					{
						title: 'Opcional',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: ''
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: ''
							}
						]
					}
				]
			}
		]
	}
]

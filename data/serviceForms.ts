import { ServiceForm } from '../types/global'

export const allServiceForms: ServiceForm[] = [
	{
		id: 1,
		title: 'Iluminação Pública',
		mapFeatures: [],
		pages: [
			{
				index: 1,
				sections: [
					{
						title: 'Localização',
						elements: [
							{
								id: 1,
								title: 'Local do Serviço',
								alias: 'localDoServico',
								type: 'TextInput',
								placeHolder: 'Nome da rua',
								value: ''
							},
							{
								id: 2,
								title: 'Bairro',
								alias: 'bairro',
								type: 'TextInput',
								placeHolder: 'Nome do nairro',
								value: ''
							},
							{
								id: 3,
								title: 'Número',
								alias: 'numero',
								type: 'TextInput',
								placeHolder: 'Número da casa',
								value: ''
							},
							{
								id: 4,
								title: 'Complemento',
								alias: 'complemento',
								type: 'TextInput',
								placeHolder: 'Complemento',
								value: ''
							},
							{
								id: 5,
								title: 'Ponto de Referência',
								alias: 'pontoDeReferência',
								type: 'TextInput',
								placeHolder: 'Ponto de Referência',
								value: ''
							}
						]
					}
				]
			}
		]
	}
]

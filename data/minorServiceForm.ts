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
	uniqueValue?: string
	alias: string
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
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número do Poste (opcional)',
								alias: 'numeroDoPoste',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Lâmpada sempre acesa',
								alias: 'lampadaSempreAcesa',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Lâmpada intermitente',
								alias: 'lampadaIntermitente',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Lâmpada apagada',
								alias: 'lampadaApagada',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	{
		minorServiceId: 2,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número do Poste (opcional)',
								alias: 'numeroDoPoste',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Sem serviço de iluminação',
								alias: 'semServicoDeIluminacao',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Lâmpada sempre acesa',
								alias: 'lampadaSempreAcesa',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Lâmpada intermitente',
								alias: 'lampadaIntermitente',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Lâmpada apagada',
								alias: 'lampadaApagada',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	{
		minorServiceId: 3,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número do Poste (opcional)',
								alias: 'numeroDoPoste',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Sem serviço de iluminação',
								alias: 'semServicoDeIluminacao',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Lâmpada sempre acesa',
								alias: 'lampadaSempreAcesa',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Lâmpada intermitente',
								alias: 'lampadaIntermitente',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Lâmpada apagada',
								alias: 'lampadaApagada',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	{
		minorServiceId: 4,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Falta de água na residência',
								alias: 'faltaDeAguaNaResidencia',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Falta de água no bairro',
								alias: 'faltaDeAguaNoBairro',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Tempo de ocorrência',
						uniqueValue: '',
						alias: 'tempoDeOcorrencia',
						fields: [
							{
								label: 'Menos de 24 horas',
								alias: 'menosDe24Horas',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Entre 24 e 72 horas',
								alias: 'entre24E72Horas',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Mais de 72 horas',
								alias: 'maisDe72Horas',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	{
		minorServiceId: 5,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Vazamento na vida pública',
								alias: 'vazamentoNaViaPublica',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Vazamento na Calçada',
								alias: 'vazamentoNaCalcada',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Tempo de ocorrência',
						uniqueValue: '',
						alias: 'tempoDeOcorrencia',
						fields: [
							{
								label: 'Menos de 24 horas',
								alias: 'menosDe24Horas',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Entre 24 e 72 horas',
								alias: 'entre24E72Horas',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Mais de 72 horas',
								alias: 'maisDe72Horas',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 6,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Não tenho abastecimento público',
								alias: 'naoTenhoAbastecimentoPublico',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Não ppaguei a conta de água',
								alias: 'naoPagueiAContaDeAgua',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Problemas no abastecimento',
								alias: 'problemasNoAbastecimento',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 7,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Esgoto residencial',
								alias: 'esgotoResidencial',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Esgoto comercial',
								alias: 'esgotoComercial',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Esgoto em Vias públicas',
								alias: 'esgotoEmViasPublicas',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 8,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Coleta de lixo residencial',
								alias: 'coletaDeLixoResidencial',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Coleta de lixo comercial',
								alias: 'coletaDeLixoComercial',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Coleta de lixo em vias públicas',
								alias: 'coletaDeLixoEmViasPublicas',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 9,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Controle de mosquitos',
								alias: 'controleDeMosquitos',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Controle de roedores',
								alias: 'controleDeRoedores',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Controle de baratas e outros insetos',
								alias: 'controleDeBaratasEOutrosInsetos',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 10,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Estrada de asfalto',
								alias: 'estradaDeAsfalto',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Estrada de terra',
								alias: 'estradaDeTerra',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Calçadas',
								alias: 'calcadas',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 11,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Residência',
								alias: 'residencia',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Comércio',
								alias: 'comercio',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Rua',
								alias: 'rua',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Terreno baldio',
								alias: 'terrenoBaldio',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 12,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 13,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Árvore próxima à rede elétrica',
								alias: 'arvoreProximaARedeEletrica',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Árvore ameaça cair',
								alias: 'arvoreAmeacaCair',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 14,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Via pavimentada',
								alias: 'viaPavimentada',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Via não pavimentada',
								alias: 'viaNaoPavimentada',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Áreas verdes e praças',
								alias: 'areasVerdesEPracas',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 15,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Presença de buracos',
								alias: 'presencaDeBuracos',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Árvores e raízes obstruindo a passagem',
								alias: 'arvoresERaizesObstruindoAPassagem',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Postes obstruindo a passagem',
								alias: 'postesObstruindoAPassagem',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 16,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Derivado de vazamento de tubulação',
								alias: 'derivadoDeVazamentoDeTubulacao',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Decorrente de chuvas',
								alias: 'decorrenteDeChuvas',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
	//
	//
	//
	{
		minorServiceId: 17,
		pages: [
			{
				index: 1,
				title: 'Selecione no mapa a localização do problema',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: '',
								alias: 'map',
								type: 'map',
								value: true,
							},
						],
					},
				],
			},
			{
				index: 2,
				title: 'Informe os dados do local',
				sections: [
					{
						title: '',
						alias: '',
						fields: [
							{
								label: 'Logradouro',
								alias: 'logradouro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Bairro',
								alias: 'bairro',
								type: 'textInput',
								value: '',
							},
							{
								label: 'CEP',
								alias: 'cep',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Número',
								alias: 'numero',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Complemento (opcional)',
								alias: 'complemento',
								type: 'textInput',
								value: '',
							},
							{
								label: 'Ponto de Referência',
								alias: 'pontoDeReferencia',
								type: 'textInput',
								value: '',
							},
						],
					},
				],
			},
			{
				index: 3,
				title: 'Informações adicionais',
				sections: [
					{
						title: 'Especificação do problema',
						uniqueValue: '',
						alias: 'especificacao',
						fields: [
							{
								label: 'Necessidade de tratamento médico',
								alias: 'necessidadeDeTratamentoMedico',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Dificuldade de locomoção',
								alias: 'dificuldadeDeLocomocao',
								type: 'radioButton',
								value: false,
							},
							{
								label: 'Postes obstruindo a passagem',
								alias: 'postesObstruindoAPassagem',
								type: 'radioButton',
								value: false,
							},
						],
					},
					{
						title: 'Opcional',
						alias: '',
						fields: [
							{
								label: 'Descreva o serviço necessário (Opcional)',
								alias: 'notes',
								type: 'textArea',
								value: '',
							},
							{
								label: 'Foto do problema (Opcional)',
								alias: 'photo',
								type: 'file',
								value: '',
							},
						],
					},
				],
			},
		],
	},
]

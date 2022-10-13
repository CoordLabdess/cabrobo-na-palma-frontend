import { Tool } from '../types/global'
import educacaoImg from '../assets/home/educacao.png'
import saudeImg from '../assets/home/saude.png'
import solicitarServicoImg from '../assets/home/solicitar-servico.png'
import suaEmpresaAquiImg from '../assets/home/sua-empresa-aqui.png'
import transporteSeguroImg from '../assets/home/transporte-seguro.png'
import turismoImg from '../assets/home/turismo.png'

import solicitarServicoColor from '../assets/home/solicitarServicoColor.png'
import suaEmpresaAquiColor from '../assets/home/suaEmpresaAquiColor.png'

import saudeColor from '../assets/home/saudeColor.png'

import educacaoColor from '../assets/home/educacaoColor.png'

import assistenciaSocial from '../assets/home/assistenciaSocial.png'
import assistenciaSocialColor from '../assets/home/assistenciaSocialColor.png'

export const allTools: Tool[] = [
	{
		id: 1,
		navigateTo: 'SolicitarServicos',
		alias: 'solicitar-servicos',
		title: 'Solicitar Serviços',
		img: solicitarServicoImg,
		img2: solicitarServicoColor,
		category: 'Tool',
		majorServicesIds: [1, 2, 3, 4],
	},
	{
		id: 2,
		navigateTo: 'SuaEmpresaAqui',
		alias: 'sua-empresa-aqui',
		title: 'Sua Empresa Aqui',
		img: suaEmpresaAquiImg,
		img2: suaEmpresaAquiColor,
		category: 'Tool',
		majorServicesIds: [],
	},
	{
		id: 3,
		navigateTo: 'Saude',
		alias: 'saude',
		title: 'Saúde',
		img: saudeImg,
		img2: saudeColor,
		category: 'Tool',
		majorServicesIds: [],
	},
	{
		id: 4,
		navigateTo: 'ComingSoon',
		alias: 'turismo',
		title: 'Turismo',
		img: turismoImg,
		img2: transporteSeguroImg,
		category: 'Tool',
		majorServicesIds: [],
	},
	{
		id: 5,
		navigateTo: 'Educacao',
		alias: 'educacao',
		title: 'Educação',
		img: educacaoImg,
		img2: educacaoColor,
		category: 'Tool',
		majorServicesIds: [],
	},
	{
		id: 6,
		navigateTo: 'ComingSoon',
		alias: 'transporte-seguro',
		title: 'Transporte Seguro',
		img: transporteSeguroImg,
		img2: transporteSeguroImg,
		category: 'Tool',
		majorServicesIds: [],
	},
	{
		id: 7,
		navigateTo: 'AssistenciaSocial',
		alias: 'assistencia-social',
		title: 'Assistência Social',
		img: assistenciaSocial,
		img2: assistenciaSocialColor,
		category: 'Tool',
		majorServicesIds: [],
	},
]

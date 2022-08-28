import { Tool } from '../types/global'
import educacaoImg from '../assets/home/educacao.png'
import saudeImg from '../assets/home/saude.png'
import solicitarServicoImg from '../assets/home/solicitar-servico.png'
import suaEmpresaAquiImg from '../assets/home/sua-empresa-aqui.png'
import transporteSeguroImg from '../assets/home/transporte-seguro.png'
import turismoImg from '../assets/home/turismo.png'

import solicitarServicoColor from '../assets/home/solicitarServicoColor.png'

export const allTools: Tool[] = [
	{
		id: 1,
		navigateTo: 'SolicitarServicos',
		alias: 'solicitar-servicos',
		title: 'Solicitar Serviços',
		img: solicitarServicoImg,
		img2: solicitarServicoColor,
		category: 'Tool',
		majorServicesIds: [1, 2, 3, 4]
	},
	{
		id: 2,
		navigateTo: 'ComingSoon',
		alias: 'sua-empresa-aqui',
		title: 'Sua Empresa Aqui',
		img: suaEmpresaAquiImg,
		img2: transporteSeguroImg,
		category: 'Tool',
		majorServicesIds: []
	},
	{
		id: 3,
		navigateTo: 'ComingSoon',
		alias: 'saude',
		title: 'Saúde',
		img: saudeImg,
		img2: transporteSeguroImg,
		category: 'Tool',
		majorServicesIds: []
	},
	{
		id: 4,
		navigateTo: 'ComingSoon',
		alias: 'turismo',
		title: 'Turismo',
		img: turismoImg,
		img2: transporteSeguroImg,
		category: 'Tool',
		majorServicesIds: []
	},
	{
		id: 5,
		navigateTo: 'ComingSoon',
		alias: 'educacao',
		title: 'Educação',
		img: educacaoImg,
		img2: transporteSeguroImg,
		category: 'Tool',
		majorServicesIds: []
	},
	{
		id: 6,
		navigateTo: 'ComingSoon',
		alias: 'transporte-seguro',
		title: 'Transporte Seguro',
		img: transporteSeguroImg,
		img2: transporteSeguroImg,
		category: 'Tool',
		majorServicesIds: []
	}
]

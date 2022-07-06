import { Tool } from '../types/global'
import educacaoImg from '../assets/home/educacao.png'
import saudeImg from '../assets/home/saude.png'
import solicitarServicoImg from '../assets/home/solicitar-servico.png'
import suaEmpresaAquiImg from '../assets/home/sua-empresa-aqui.png'
import transporteSeguroImg from '../assets/home/transporte-seguro.png'
import turismoImg from '../assets/home/turismo.png'

export const tools: Tool[] = [
	{
		id: 1,
		navigateTo: 'Services',
		alias: 'solicitar-servicos',
		title: 'Solicitar Serviços',
		img: solicitarServicoImg
	},
	{
		id: 2,
		navigateTo: 'ComingSoon',
		alias: 'sua-empresa-aqui',
		title: 'Sua Empresa Aqui',
		img: suaEmpresaAquiImg
	},
	{
		id: 3,
		navigateTo: 'ComingSoon',
		alias: 'saude',
		title: 'Saúde',
		img: saudeImg
	},
	{
		id: 4,
		navigateTo: 'ComingSoon',
		alias: 'turismo',
		title: 'Turismo',
		img: turismoImg
	},
	{
		id: 5,
		navigateTo: 'ComingSoon',
		alias: 'educacao',
		title: 'Educação',
		img: educacaoImg
	},
	{
		id: 6,
		navigateTo: 'ComingSoon',
		alias: 'transporte-seguro',
		title: 'Transporte Seguro',
		img: transporteSeguroImg
	}
]

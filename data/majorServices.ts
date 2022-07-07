import { MajorService } from '../types/global'
import abastecimentoDeAguaImg from '../assets/services/majorservices/abastecimento-de-agua.png'
import iluminacaoPublicaImg from '../assets/services/majorservices/iluminacao-publica.png'
import mobilidadeUrbanaImg from '../assets/services/majorservices/mobilidade-urbana.png'
import saneamentoBasicoImg from '../assets/services/majorservices/saneamento-basico.png'

export const allMajorServices: MajorService[] = [
	{
		id: 1,
		title: 'Iluminação Pública',
		alias: 'IluminacaoPublica',
		img: iluminacaoPublicaImg,
		category: 'MajorService',
		minorServicesId: [1, 2, 3]
	},
	{
		id: 2,
		title: 'Mobilidade Urbana',
		alias: 'MobilidadeUrbana',
		img: mobilidadeUrbanaImg,
		category: 'MajorService',
		minorServicesId: []
	},
	{
		id: 3,
		title: 'Abastecimento de Água',
		alias: 'AbastecimentoDeAgua',
		img: abastecimentoDeAguaImg,
		category: 'MajorService',
		minorServicesId: []
	},
	{
		id: 4,
		title: 'Saneamento Básico',
		alias: 'SaneamentoBasico',
		img: saneamentoBasicoImg,
		category: 'MajorService',
		minorServicesId: []
	}
]

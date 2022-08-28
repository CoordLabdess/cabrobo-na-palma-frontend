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
		title: 'Abastecimento de Água',
		alias: 'AbastecimentoDeAgua',
		img: abastecimentoDeAguaImg,
		category: 'MajorService',
		minorServicesId: [4, 5, 6]
	},

	{
		id: 3,
		title: 'Saneamento Básico',
		alias: 'SaneamentoBasico',
		img: saneamentoBasicoImg,
		category: 'MajorService',
		minorServicesId: [7, 8, 9]
	},
	{
		id: 4,
		title: 'Mobilidade Urbana',
		alias: 'MobilidadeUrbana',
		img: mobilidadeUrbanaImg,
		category: 'MajorService',
		minorServicesId: [10, 11, 12, 13, 14, 15, 16, 17]
	}
]

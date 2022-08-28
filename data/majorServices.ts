import { MajorService } from '../types/global'
import abastecimentoDeAguaImg from '../assets/services/majorservices/abastecimentoDeAgua/abastecimento-de-agua.png'
import iluminacaoPublicaImg from '../assets/services/majorservices/iluminacaoPublica/iluminacao-publica.png'
import mobilidadeUrbanaImg from '../assets/services/majorservices/mobilidadeUrbana/mobilidade-urbana.png'
import saneamentoBasicoImg from '../assets/services/majorservices/saneamentoBasico/saneamento-basico.png'

import abastecimentoDeAguaColor from '../assets/services/majorservices/abastecimentoDeAgua/abastecimentoDeAguaColor.png'
import iluminacaoPublicaColor from '../assets/services/majorservices/iluminacaoPublica/iluminacaoPublicaColor.png'
import saneamentoBasicoColor from '../assets/services/majorservices/saneamentoBasico/saneamentoBasicoColor.png'
import mobilidadeUrbanaColor from '../assets/services/majorservices/mobilidadeUrbana/mobilidadeUrbanaColor.png'

export const allMajorServices: MajorService[] = [
	{
		id: 1,
		title: 'Iluminação Pública',
		alias: 'IluminacaoPublica',
		img: iluminacaoPublicaImg,
		img2: iluminacaoPublicaColor,
		category: 'MajorService',
		minorServicesId: [1, 2, 3]
	},

	{
		id: 2,
		title: 'Abastecimento de Água',
		alias: 'AbastecimentoDeAgua',
		img: abastecimentoDeAguaImg,
		img2: abastecimentoDeAguaColor,
		category: 'MajorService',
		minorServicesId: [4, 5, 6]
	},

	{
		id: 3,
		title: 'Saneamento Básico',
		alias: 'SaneamentoBasico',
		img: saneamentoBasicoImg,
		img2: saneamentoBasicoColor,
		category: 'MajorService',
		minorServicesId: [7, 8, 9]
	},
	{
		id: 4,
		title: 'Mobilidade Urbana',
		alias: 'MobilidadeUrbana',
		img: mobilidadeUrbanaImg,
		img2: mobilidadeUrbanaColor,
		category: 'MajorService',
		minorServicesId: [10, 11, 12, 13, 14, 15, 16, 17]
	}
]

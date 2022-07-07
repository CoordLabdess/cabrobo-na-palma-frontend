import { MinorService } from '../types/global'
import iluminacaoPublicaImg from '../assets/services/majorservices/iluminacao-publica.png'

export const allMinorServices: MinorService[] = [
	{
		id: 1,
		title: 'Postes',
		alias: 'postes',
		img: iluminacaoPublicaImg,
		category: 'MinorService',
		formId: 1
	},
	{
		id: 2,
		title: 'Praças',
		alias: 'pracas',
		img: iluminacaoPublicaImg,
		category: 'MinorService',
		formId: 2
	},
	{
		id: 3,
		title: 'Monumentos',
		alias: 'monumentos',
		img: iluminacaoPublicaImg,
		category: 'MinorService',
		formId: 3
	}
]

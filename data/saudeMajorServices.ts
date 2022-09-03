import covidMono from '../assets/services/saude/casosDeCovidMono.png'
import dengueMono from '../assets/services/saude/casosDeDengueMono.png'

interface SuaEmpresaAquiMajorService {
	id: number
	title: string
	alias: string
	imgMono: string
	imgColor: string
}

export const saudeMajorServices: SuaEmpresaAquiMajorService[] = [
	{
		id: 1,
		title: 'Mapa de COVID-19',
		alias: 'SaudeMapaCovid',
		imgMono: covidMono,
		imgColor: covidMono
	},
	{
		id: 2,
		title: 'Mapa de Dengue',
		alias: 'SaudeMapaDengue',
		imgMono: dengueMono,
		imgColor: dengueMono
	}
]

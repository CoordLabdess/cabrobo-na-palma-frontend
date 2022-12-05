import pontosDeColetaMono from '../assets/services/educacao/pontosDeColetaMono.png'
import reciclaCabroboMono from '../assets/services/educacao/reciclaCabroboMono.png'

interface SuaEmpresaAquiMajorService {
	id: number
	title: string
	alias: string
	imgMono: string
	imgColor: string
}

export const turismoMajorServices: SuaEmpresaAquiMajorService[] = [
	{
		id: 1,
		title: 'Pontos Turísticos',
		alias: 'PontosTuristicos',
		imgMono: pontosDeColetaMono,
		imgColor: pontosDeColetaMono,
	},
]

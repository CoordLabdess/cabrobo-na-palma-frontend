import pontosDeColetaMono from '../assets/services/educacao/pontosDeColetaMono.png'
import reciclaCabroboMono from '../assets/services/educacao/reciclaCabroboMono.png'

interface SuaEmpresaAquiMajorService {
	id: number
	title: string
	alias: string
	imgMono: string
	imgColor: string
}

export const educacaoMajorServices: SuaEmpresaAquiMajorService[] = [
	{
		id: 1,
		title: 'Pontos de Coleta',
		alias: 'PontosDeColeta',
		imgMono: pontosDeColetaMono,
		imgColor: pontosDeColetaMono,
	},
	{
		id: 2,
		title: 'Recicla Cabrobó',
		alias: 'ReciclaCabrobo',
		imgMono: reciclaCabroboMono,
		imgColor: reciclaCabroboMono,
	},
]

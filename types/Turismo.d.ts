import { Coords } from './global'

export interface PontoTuristico {
	id: number
	nome: string
	descricao: string
	thumbnail: string
	galeria: string[]
	coords: Coords
}

export type CategoriasDeEstabelecimentos =
	| 'HOTEL'
	| 'PET SHOP'
	| 'LABORATÓRIO'
	| 'ACADEMIA'
	| 'CARTÓRIO'
	| 'HOSPITAL'
	| 'SORVETERIA'
	| 'PROVEDOR DE INTERNET'
	| 'ÓTICA'
	| 'HOSPITAL VETERINÁRIO'
	| 'LOJA DE VARIEDADE'
	| 'RESTAURANTE'
	| 'SALÃO DE BELEZA'
	| 'AUTO PEÇAS'
	| 'SUPERMERCADO'
	| 'LOJA DE CONSTRUÇÃO'
	| 'POSTO DE COMBUSTÍVEL'
	| 'SALÃO DE FESTAS'
	| 'CONCESSIONÁRIA'
	| 'DENTISTA'
	| 'DOCERIA'
	| 'PADARIA'
	| 'FARMÁCIA'

export interface TipoEstabelecimento {
	id: number
	categoria: CategoriasDeEstabelecimentos
}

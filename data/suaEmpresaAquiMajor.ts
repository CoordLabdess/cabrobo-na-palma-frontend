import procurarEstabelecimentoMono from '../assets/services/suaEmpresaAqui/procurarEstabelecimentoMono.png'
import cadastrarEmpresaMono from '../assets/services/suaEmpresaAqui/cadastrarEmpresaMono.png'

interface SuaEmpresaAquiMajorService {
	id: number
	title: string
	alias: string
	imgMono: string
	imgColor: string
}

export const SuaEmpresaAquiMajorServices: SuaEmpresaAquiMajorService[] = [
	{
		id: 1,
		title: 'Procurar Estabelecimento',
		alias: 'procurarEstabelecimento',
		imgMono: procurarEstabelecimentoMono,
		imgColor: procurarEstabelecimentoMono
	},
	{
		id: 2,
		title: 'Cadastrar Empresa',
		alias: 'cadastrarEmpresa',
		imgMono: cadastrarEmpresaMono,
		imgColor: cadastrarEmpresaMono
	}
]

import React, { createContext, useState } from 'react'
import { Coords } from '../types/global'

interface CadastrarEmpresaData {
	coords: Coords | null
	logradouro: string | null
	nomeDoEstabelecimento: string | null
	telefoneParaContato: string | null
	tipoDoEstabelecimento: string | null
	pontoDeReferencia: string | null
}

interface CadastrarEmpresa {
	data: CadastrarEmpresaData
	updateData: (d: CadastrarEmpresaData) => void
}

export const CadastrarEmpresaContext = createContext<CadastrarEmpresa>({
	data: {
		coords: null,
		logradouro: null,
		nomeDoEstabelecimento: null,
		pontoDeReferencia: null,
		telefoneParaContato: null,
		tipoDoEstabelecimento: null
	},
	updateData: (d: CadastrarEmpresaData) => {}
})

export function CadastrarEmpresaContextProvider(props: { children: React.ReactNode }) {
	const [data, setData] = useState<CadastrarEmpresaData>({
		coords: null,
		logradouro: null,
		nomeDoEstabelecimento: null,
		pontoDeReferencia: null,
		telefoneParaContato: null,
		tipoDoEstabelecimento: null
	})

	function updateData(d: CadastrarEmpresaData) {
		setData(d)
	}

	const value = {
		data,
		updateData
	}

	return (
		<CadastrarEmpresaContext.Provider value={value}>
			{props.children}
		</CadastrarEmpresaContext.Provider>
	)
}

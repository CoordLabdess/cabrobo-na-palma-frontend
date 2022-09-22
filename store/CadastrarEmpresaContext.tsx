import React, { createContext, useContext, useState } from 'react'
import { Coords } from '../types/global'

interface RegisterEnterpriseData {
	coords: Coords | null
	logradouro: string | null
	nomeDoEstabelecimento: string | null
	telefoneParaContato: string | null
	tipoDoEstabelecimento: string | null
	pontoDeReferencia: string | null
}

interface RegisterEnterprise {
	data: RegisterEnterpriseData
	updateData: (d: RegisterEnterpriseData) => void
	clearData: () => void
}

export const RegisterEnterpriseContext = createContext<RegisterEnterprise>({} as RegisterEnterprise)

const cleanData: RegisterEnterpriseData = {
	coords: null,
	logradouro: null,
	nomeDoEstabelecimento: null,
	pontoDeReferencia: null,
	telefoneParaContato: null,
	tipoDoEstabelecimento: null,
}

export function RegisterEnterpriseContextProvider(props: { children: React.ReactNode }) {
	const [data, setData] = useState<RegisterEnterpriseData>(cleanData)

	function updateData(d: RegisterEnterpriseData) {
		setData(d)
	}

	function clearData() {
		setData(cleanData)
	}

	const value = {
		data,
		updateData,
		clearData,
	}

	return (
		<RegisterEnterpriseContext.Provider value={value}>
			{props.children}
		</RegisterEnterpriseContext.Provider>
	)
}

export function useRegisterEnterprise() {
	return useContext(RegisterEnterpriseContext)
}

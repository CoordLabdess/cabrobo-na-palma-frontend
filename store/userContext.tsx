import React, { createContext, useContext, useState } from 'react'
import { Coords } from '../types/global'
import { Estabelecimento, generateToken, obterTodosEstabelecimentos } from '../utils/arcgis'

interface UserContextData {
	loading: boolean
	establishments: Estabelecimento[]
	buscarEstabelecimentos: () => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider(props: { children: React.ReactNode }) {
	const [loading, setLoading] = useState(false)
	const [establishments, setEstablishments] = useState<Estabelecimento[]>([] as Estabelecimento[])

	function buscarEstabelecimentos() {
		setLoading(true)
		generateToken().then(token => {
			obterTodosEstabelecimentos(token)
				.then(res => {
					setEstablishments(res.features)
				})
				.catch(err => {
					console.log(err)
				})
				.finally(() => setLoading(false))
		})
	}

	return (
		<UserContext.Provider value={{ loading, establishments, buscarEstabelecimentos }}>
			{props.children}
		</UserContext.Provider>
	)
}

export function useUser() {
	return useContext(UserContext)
}

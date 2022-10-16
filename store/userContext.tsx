import { useToast } from 'native-base'
import React, { createContext, useContext, useState } from 'react'
import { Coords } from '../types/global'
import {
	Estabelecimento,
	generateToken,
	getRequestByProtocol,
	obterTodosEstabelecimentos,
} from '../utils/arcgis'
import { RequestProps } from '../utils/contextTypes'

interface UserContextData {
	loading: boolean
	establishments: Estabelecimento[]
	buscarEstabelecimentos: () => void
	getRequest: (protocol: string) => void
	request: RequestProps
	setRequest: (request: RequestProps) => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider(props: { children: React.ReactNode }) {
	const [loading, setLoading] = useState(false)
	const [establishments, setEstablishments] = useState<Estabelecimento[]>([] as Estabelecimento[])
	const [request, setRequest] = useState<RequestProps>({} as RequestProps)
	const toast = useToast()

	function buscarEstabelecimentos() {
		generateToken().then(token => {
			setLoading(true)
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

	async function getRequest(protocol: string) {
		try {
			setLoading(true)
			const response = await getRequestByProtocol(protocol)
			if (response.length > 0) {
				setRequest(response[0].attributes)
			} else {
				setRequest({} as RequestProps)
				throw new Error('Protocolo não encontrado')
			}
		} catch (error) {
			toast.show({
				title: 'Protocolo não encontrado',

				placement: 'bottom',
			})
		} finally {
			setLoading(false)
		}
	}

	return (
		<UserContext.Provider
			value={{ loading, establishments, buscarEstabelecimentos, getRequest, request, setRequest }}
		>
			{props.children}
		</UserContext.Provider>
	)
}

export function useUser() {
	return useContext(UserContext)
}

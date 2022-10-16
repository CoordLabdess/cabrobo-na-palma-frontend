import React, { createContext, useContext, useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import * as SplashScreen from 'expo-splash-screen'
import { AxiosError } from 'axios'
import { useToast } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { api } from '../services/api'
import { UserProps } from '../utils/contextTypes'

export type AuthType = 'Common' | null

interface Auth {
	token: string | null
	type: AuthType
	isAuthenticated: boolean
	authenticate: (token: string, type: AuthType) => void
	logout: () => void
	signed: null | number
	login: (values: any) => void
	loading: boolean
	signup: (values: any) => void
	user: UserProps
}

export const AuthContext = createContext<Auth>({} as Auth)

export function AuthContextProvider(props: { children: React.ReactNode }) {
	const [authToken, setAuthToken] = useState<null | string>(null)
	const [authType, setAuthType] = useState<AuthType>(null)
	const [signed, setSigned] = useState<null | number>(null)
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState<UserProps>({} as UserProps)
	const toast = useToast()

	async function authenticate(token: string, type: AuthType) {
		await SecureStore.setItemAsync('auth', 'true')
		await SecureStore.setItemAsync('token', token)
		setAuthToken(token)
		setAuthType(type)
		setSigned(1)
	}

	async function login(values: any) {
		try {
			setLoading(true)
			const { data } = await api.post('/login', {
				cpf: values.cpf.replace(/\./g, '').replace(/\-/g, ''),
				password: values.password,
			})
			await SecureStore.setItemAsync('auth', 'true')
			await SecureStore.setItemAsync('token', data.accessToken)
			setAuthToken(data.accessToken)
			setAuthType('Common')
			setSigned(1)
		} catch (error: any) {
			if (error.response?.data?.message.includes('incorretos')) {
				toast.show({
					title: 'Credenciais inválidas',

					placement: 'bottom',
				})
			}
		} finally {
			setLoading(false)
		}
	}

	async function signup(values: any) {
		try {
			setLoading(true)
			const { data } = await api.post('/user/createUser', {
				cpf: values.cpf.replace(/\./g, '').replace(/\-/g, ''),
				email: values.mail,
				nome: values.name,
				telefone: values.phone.replace(/\-/g, '').replace(/\(/g, '').replace(/\)/g, ''),
				senha: values.password,
			})
			login(values)
		} catch (error: any) {
			console.log(error.response?.data)
		} finally {
			setLoading(false)
		}
	}

	async function logout() {
		setAuthToken(null)
		await SecureStore.deleteItemAsync('token')
		await SecureStore.deleteItemAsync('auth')
		setSigned(2)
	}

	async function listUser() {
		try {
			setLoading(true)
			const { data } = await api.get('/user')
			setUser(data)
		} catch (error: any) {
			console.log(error.response?.data)
		} finally {
			setLoading(false)
		}
	}

	async function fetchToken() {
		const token = await SecureStore.getItemAsync('token')
		const auth = await SecureStore.getItemAsync('auth')
		if (auth === 'true' && token) {
			setSigned(1)
		} else {
			setSigned(2)
		}
	}

	useEffect(() => {
		try {
			SplashScreen.preventAutoHideAsync()
			fetchToken()
			if (signed === 1) {
				listUser()
			}
		} catch (error) {
			console.log(error)
		} finally {
			if (signed === 1 || signed === 2) {
				SplashScreen.hideAsync()
			}
		}
	}, [signed])

	const value: Auth = {
		token: authToken,
		type: authType,
		isAuthenticated: !!authToken,
		authenticate,
		logout,
		signed,
		login,
		loading,
		signup,
		user,
	}

	return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export function useAuth() {
	return useContext(AuthContext)
}

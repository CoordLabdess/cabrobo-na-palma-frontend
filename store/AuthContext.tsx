import React, { createContext, useContext, useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import * as SplashScreen from 'expo-splash-screen'

export type AuthType = 'Common' | null

interface Auth {
	token: string | null
	type: AuthType
	isAuthenticated: boolean
	authenticate: (token: string, type: AuthType) => void
	logout: () => void
	signed: null | number
}

export const AuthContext = createContext<Auth>({} as Auth)

export function AuthContextProvider(props: { children: React.ReactNode }) {
	const [authToken, setAuthToken] = useState<null | string>(null)
	const [authType, setAuthType] = useState<AuthType>(null)
	const [signed, setSigned] = useState<null | number>(null)

	async function authenticate(token: string, type: AuthType) {
		await SecureStore.setItemAsync('auth', 'true')
		await SecureStore.setItemAsync('token', token)
		setAuthToken(token)
		setAuthType(type)
		setSigned(1)
	}

	async function logout() {
		setAuthToken(null)
		await SecureStore.deleteItemAsync('token')
		await SecureStore.deleteItemAsync('auth')
		setSigned(2)
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
	}

	return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export function useAuth() {
	return useContext(AuthContext)
}

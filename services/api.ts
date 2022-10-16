import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

export const api = axios.create({
	baseURL: 'https://palma-da-mao-free.herokuapp.com/',

	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
})

api.interceptors.request.use(
	async (config: any) => {
		const token = await getItemAsync('token')

		if (token) config.headers.Authorization = `Bearer ${token}`
		return config
	},
	error => Promise.reject(error),
)

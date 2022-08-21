import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { UserTypeNavigation } from './UserTypeNavigation'

export function Navigation() {
	const [isLogged, setIsLogged] = useState(true)
	return isLogged ? (
		<UserTypeNavigation />
	) : (
		<View>
			<Text>Login</Text>
		</View>
	)
}

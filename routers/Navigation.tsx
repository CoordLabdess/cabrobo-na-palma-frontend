import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { UserTypeNavigation } from './UserTypeNavigation'
import { AuthContext } from '../store/AuthContext'
import { RootPublicRouter } from './public/RootPublicRouter'

export function Navigation() {
	const { isAuthenticated } = useContext(AuthContext)
	return isAuthenticated ? (
		<UserTypeNavigation />
	) : (
		<NavigationContainer>
			<StatusBar style='dark' backgroundColor='#fff' />
			<RootPublicRouter />
		</NavigationContainer>
	)
}

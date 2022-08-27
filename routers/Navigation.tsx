import { View, Text } from 'react-native'
import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { UserTypeNavigation } from './UserTypeNavigation'
import { AuthContext } from '../store/AuthContext'
import { RootPublicRouter } from './public/RootPublicRouter'

export function Navigation() {
	const authCtx = useContext(AuthContext)
	return authCtx.isAuthenticated ? (
		<UserTypeNavigation />
	) : (
		<NavigationContainer>
			<StatusBar style='dark' backgroundColor='#fff' />
			<RootPublicRouter />
		</NavigationContainer>
	)
}

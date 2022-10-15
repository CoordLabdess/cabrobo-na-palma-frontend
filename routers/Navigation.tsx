import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { UserTypeNavigation } from './UserTypeNavigation'
import { AuthContext } from '../store/AuthContext'
import { RootPublicRouter } from './public/RootPublicRouter'
import { HomeNavigator } from './common/RootCommonRouter'

export function Navigation() {
	const { signed } = useContext(AuthContext)
	return (
		<NavigationContainer>
			{/* {signed === 1 ? (
				<>
					<StatusBar style='dark' />
					<HomeNavigator />
				</>
			) : signed === 2 ? (
				<>
					<StatusBar style='dark' backgroundColor='#fff' />
					<RootPublicRouter />
				</>
			) : undefined} */}
			<StatusBar style='dark' />
			<HomeNavigator />
		</NavigationContainer>
	)
}

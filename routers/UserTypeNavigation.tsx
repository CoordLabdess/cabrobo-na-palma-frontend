import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/colors'
import { AuthContext } from '../store/AuthContext'
import { RootCommonRouter } from './common/RootCommonRouter'
import { RootPublicRouter } from './public/RootPublicRouter'

export function UserTypeNavigation() {
	const authCtx = useContext(AuthContext)
	return authCtx.type === 'Common' ? (
		<NavigationContainer>
			<StatusBar style='dark' backgroundColor='#fff' />
			<RootCommonRouter />
		</NavigationContainer>
	) : (
		<NavigationContainer>
			<StatusBar style='dark' backgroundColor='#fff' />
			<SafeAreaView edges={['top', 'left', 'right']}>
				<Text>Oi</Text>
			</SafeAreaView>
		</NavigationContainer>
	)
}

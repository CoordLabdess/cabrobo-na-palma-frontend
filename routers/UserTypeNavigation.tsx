import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/colors'
import { AuthContext } from '../store/AuthContext'
import { HomeNavigator } from './common/RootCommonRouter'
import { RootPublicRouter } from './public/RootPublicRouter'

export function UserTypeNavigation() {
	const { type } = useContext(AuthContext)
	return type === 'Common' ? (
		<NavigationContainer>
			<StatusBar style='dark' />
			<HomeNavigator />
		</NavigationContainer>
	) : (
		<NavigationContainer>
			<StatusBar style='light' backgroundColor='#fff' />
			<SafeAreaView edges={['top', 'left', 'right']}>
				<Text>Oi</Text>
			</SafeAreaView>
		</NavigationContainer>
	)
}

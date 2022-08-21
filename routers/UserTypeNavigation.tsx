import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../constants/colors'
import { RootCommonRouter } from './common/RootCommonRouter'

export function UserTypeNavigation() {
	const [userType, setUserType] = useState('Common')
	return userType === 'Common' ? (
		<NavigationContainer>
			<StatusBar style='light' backgroundColor={COLORS.primary400} />
			<RootCommonRouter />
		</NavigationContainer>
	) : (
		<NavigationContainer>
			<StatusBar style='light' backgroundColor='#fff' />
			<Text>Hello</Text>
		</NavigationContainer>
	)
}

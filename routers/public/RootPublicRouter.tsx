import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HomeScreen, ServicesScreen } from '../../screens'
import { AnyScreen } from '../../screens/AnyScreen'
import { ServicesForm1Screen } from '../../screens/common/solicitarServicos/ServicesForm1Screen'
import { ServicesForm2Screen } from '../../screens/common/solicitarServicos/ServicesForm2Screen'
import { ServicesForm3Screen } from '../../screens/common/solicitarServicos/ServicesForm3Screen'
import { LoginScreen } from '../../screens/public/LoginScreen'

const Stack = createNativeStackNavigator()

export function RootPublicRouter() {
	return (
		<Stack.Navigator
			initialRouteName='SolicitarServicosMajor'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name='Login'
				component={LoginScreen}
				options={{
					title: 'Login',
					animation: 'slide_from_right',
				}}
			/>
		</Stack.Navigator>
	)
}

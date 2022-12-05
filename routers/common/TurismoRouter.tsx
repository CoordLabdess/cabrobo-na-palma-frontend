import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Platform, Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ComingSoon } from '../../screens'
import { TurismoHomeScreen } from '../../screens/common/turismo/TurismoHomeScreen'

const Stack = createNativeStackNavigator()

function customBackButton(navigation: any) {
	return Platform.OS === 'ios' ? (
		<Button title='Voltar' onPress={() => navigation.goBack()} />
	) : (
		<View
			style={{
				borderRadius: 1000,
				padding: 2,
				overflow: 'hidden',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Pressable style={{}} android_ripple={{ color: '#ccc' }} onPress={() => navigation.goBack()}>
				<Ionicons name='chevron-back' size={35} />
			</Pressable>
		</View>
	)
}

export function TurismoRouter() {
	return (
		<Stack.Navigator
			initialRouteName='TurismoHome'
			screenOptions={({ navigation }) => ({
				headerTitleAlign: 'center',
				headerLeft: () => customBackButton(navigation),
			})}
		>
			<Stack.Screen
				name='TurismoHome'
				component={TurismoHomeScreen}
				options={{
					title: 'Turismo',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='PontosTuristicos'
				component={ComingSoon}
				options={{
					title: 'Pontos Turíticos',
					animation: 'none',
				}}
			/>
		</Stack.Navigator>
	)
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button, Platform } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors'
import { AnyScreen } from '../../screens/AnyScreen'
import { HomeCommonStackRouter } from './HomeCommonStackRouter'
import { PaginaEmConstrucao } from '../../screens/public/PaginaEmConstrucao'
import { NoticiasHomeScreen } from '../../screens/common/noticias/NoticiasHomeScreen'
import { NoticiasRouter } from './NoticiasRouter'

const BottomTab = createBottomTabNavigator()

export function RootCommonRouter() {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarStyle: {
					backgroundColor: COLORS.primary500,
					height: Platform.OS === 'ios' ? 80 : 65,
					paddingBottom: Platform.OS === 'ios' ? 20 : 0
				},
				tabBarInactiveTintColor: COLORS.secondary100,
				tabBarActiveTintColor: COLORS.secondary100
			}}
		>
			<BottomTab.Screen
				name='RootInicio'
				component={HomeCommonStackRouter}
				options={{
					tabBarLabel: () => null,
					tabBarIcon: tabInfo => {
						return (
							<Ionicons
								name={tabInfo.focused ? 'home-sharp' : 'home-outline'}
								size={40}
								color={tabInfo.color}
							/>
						)
					}
				}}
			/>
			<BottomTab.Screen
				name='RootPerfil'
				component={PaginaEmConstrucao}
				options={{
					tabBarLabel: () => null,
					tabBarIcon: tabInfo => {
						return (
							<Ionicons
								name={tabInfo.focused ? 'person-sharp' : 'person-outline'}
								size={40}
								color={tabInfo.color}
							/>
						)
					}
				}}
			/>
			<BottomTab.Screen
				name='RootNoticias'
				component={NoticiasRouter}
				options={{
					tabBarLabel: () => null,
					tabBarIcon: tabInfo => {
						return (
							<Ionicons
								name={tabInfo.focused ? 'newspaper-sharp' : 'newspaper-outline'}
								size={40}
								color={tabInfo.color}
							/>
						)
					}
				}}
			/>
			<BottomTab.Screen
				name='RootConfiguracoes'
				component={PaginaEmConstrucao}
				options={{
					tabBarLabel: () => null,

					tabBarIcon: tabInfo => {
						return (
							<Ionicons
								name={tabInfo.focused ? 'options-sharp' : 'options-outline'}
								size={40}
								color={tabInfo.color}
							/>
						)
					}
				}}
			/>
		</BottomTab.Navigator>
	)
}

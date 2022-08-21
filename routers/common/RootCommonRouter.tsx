import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors'
import { HomeScreen } from '../../screens'
import { AnyScreen } from '../../screens/AnyScreen'
import { HomeCommonStackRouter } from './HomeCommonStackRouter'

const BottomTab = createBottomTabNavigator()

export function RootCommonRouter() {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarStyle: {
					backgroundColor: COLORS.primary500,
					height: 65
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
				component={AnyScreen}
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
		</BottomTab.Navigator>
	)
}

import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Platform, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IonIcons from '@expo/vector-icons/Ionicons'
import { HomeScreen, ProfileScreen, ServicesScreen, ServiceFormScreen, ComingSoon } from './screens'
import { COLORS } from './constants/colors'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function Stacks() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTintColor: '#fff',
				headerStyle: {
					backgroundColor: '#4480c5'
				},
				animation: 'none'
			}}
		>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen name='Services' component={ServicesScreen} />
			<Stack.Screen name='MinorServices' component={ServicesScreen} />
			<Stack.Screen name='ServiceForm' component={ServiceFormScreen} />
			<Stack.Screen name='ComingSoon' component={ComingSoon} />
		</Stack.Navigator>
	)
}

function Tabs() {
	return (
		<Tab.Navigator
			initialRouteName='HomeStack'
			screenOptions={{
				tabBarHideOnKeyboard: true,
				tabBarActiveTintColor: '#fff',
				tabBarInactiveTintColor: '#aaaaaa',
				headerShown: false,
				tabBarStyle: {
					height: 70,
					alignItems: 'center',
					paddingBottom: 5,
					backgroundColor: COLORS.primary500
				}
			}}
		>
			<Tab.Screen
				name='HomeStack'
				component={Stacks}
				options={{
					title: 'Início',
					tabBarIcon: ({ color }) => {
						return <IonIcons name='home' size={35} color={color} />
					}
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					title: 'Perfil',
					tabBarIcon: ({ color }) => {
						return <IonIcons name='person' size={35} color={color} />
					}
				}}
			/>
			<Tab.Screen
				name='News'
				component={ComingSoon}
				options={{
					title: 'Notícias',
					tabBarIcon: ({ color }) => {
						return <IonIcons name='newspaper' size={35} color={color} />
					}
				}}
			/>
			<Tab.Screen
				name='Settings'
				component={ComingSoon}
				options={{
					title: 'Configurações',
					tabBarIcon: ({ color }) => {
						return <IonIcons name='options' size={35} color={color} />
					}
				}}
			/>
		</Tab.Navigator>
	)
}

export default function App() {
	return (
		<SafeAreaView
			style={{
				flex: 1
			}}
		>
			<StatusBar style='light' backgroundColor='#4480c5' />
			<NavigationContainer>
				<Tabs />
			</NavigationContainer>
		</SafeAreaView>
	)
}

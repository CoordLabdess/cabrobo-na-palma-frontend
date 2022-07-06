import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, Platform, StatusBar as SB } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, ProfileScreen, ServicesScreen, ServiceFormScreen } from './screens'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function Tabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Tab.Screen name='HomeStack' component={Stacks} />
			<Tab.Screen name='Profile' component={ProfileScreen} />
		</Tab.Navigator>
	)
}

function Stacks() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{
					headerShown: false
				}}
			/>
			<Tab.Screen name='Services' component={ServicesScreen} />
			<Stack.Screen name='ServiceForm' component={ServiceFormScreen} />
		</Stack.Navigator>
	)
}

export default function App() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				paddingTop: Platform.OS === 'android' ? SB.currentHeight : 0
			}}
		>
			<StatusBar style='auto' />
			<NavigationContainer>
				<Tabs />
			</NavigationContainer>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({})

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, ServicesScreen } from '../../screens'
import { AnyScreen } from '../../screens/AnyScreen'
import { SolicitarServicosStackRouter } from './SolicitarServicosStackRouter'

const Stack = createNativeStackNavigator()

export function HomeCommonStackRouter() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen
				name='Inicio'
				component={HomeScreen}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen name='SolicitarServicos' component={SolicitarServicosStackRouter} />
		</Stack.Navigator>
	)
}

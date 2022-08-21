import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, ServicesScreen } from '../../screens'
import { AnyScreen } from '../../screens/AnyScreen'

const Stack = createNativeStackNavigator()

export function SolicitarServicosStackRouter() {
	return (
		<Stack.Navigator initialRouteName='SolicitarServicosMajor'>
			<Stack.Screen
				name='SolicitarServicosMajor'
				component={ServicesScreen}
				options={{
					title: 'Solicitar Serviços'
				}}
			/>
			<Stack.Screen name='SolicitarServicosMinor' component={ServicesScreen} />
			<Stack.Screen name='SolicitarServicosForm1' component={AnyScreen} />
			<Stack.Screen name='SolicitarServicosForm2' component={AnyScreen} />
			<Stack.Screen name='SolicitarServicosForm3' component={AnyScreen} />
		</Stack.Navigator>
	)
}

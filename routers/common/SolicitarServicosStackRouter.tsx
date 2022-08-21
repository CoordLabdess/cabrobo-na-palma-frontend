import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, ServicesScreen } from '../../screens'
import { AnyScreen } from '../../screens/AnyScreen'
import { ServicesForm1Screen } from '../../screens/common/solicitarServicos/ServicesForm1Screen'
import { ServicesForm2Screen } from '../../screens/common/solicitarServicos/ServicesForm2Screen'
import { ServicesForm3Screen } from '../../screens/common/solicitarServicos/ServicesForm3Screen'

const Stack = createNativeStackNavigator()

export function SolicitarServicosStackRouter() {
	return (
		<Stack.Navigator initialRouteName='SolicitarServicosMajor'>
			<Stack.Screen
				name='SolicitarServicosMajor'
				component={ServicesScreen}
				options={{
					title: 'Solicitar Serviços',
					animation: 'none'
				}}
			/>
			<Stack.Screen name='SolicitarServicosMinor' component={ServicesScreen} />
			<Stack.Screen
				name='SolicitarServicosForm1'
				component={ServicesForm1Screen}
				options={{
					animation: 'none'
				}}
			/>
			<Stack.Screen
				name='SolicitarServicosForm2'
				component={ServicesForm2Screen}
				options={{
					animation: 'none'
				}}
			/>
			<Stack.Screen
				name='SolicitarServicosForm3'
				component={ServicesForm3Screen}
				options={{
					animation: 'none'
				}}
			/>
		</Stack.Navigator>
	)
}

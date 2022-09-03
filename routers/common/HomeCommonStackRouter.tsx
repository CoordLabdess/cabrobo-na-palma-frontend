import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, ServicesScreen } from '../../screens'
import { AnyScreen } from '../../screens/AnyScreen'
import { PaginaEmConstrucao } from '../../screens/public/PaginaEmConstrucao'
import { SaudeRouter } from './SaudeRouter'
import { SolicitarServicosStackRouter } from './SolicitarServicosStackRouter'
import { SuaEmpresaAquiRouter } from './SuaEmpresaAquiRouter'

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
			<Stack.Screen name='SuaEmpresaAqui' component={SuaEmpresaAquiRouter} />
			<Stack.Screen name='Saude' component={SaudeRouter} />
			<Stack.Screen name='ComingSoon' component={PaginaEmConstrucao} />
		</Stack.Navigator>
	)
}

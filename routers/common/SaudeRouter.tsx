import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Image, Platform, Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { HomeScreen, ServicesScreen } from '../../screens'
import { ServicesForm1Screen } from '../../screens/common/solicitarServicos/ServicesForm1Screen'
import { ServicesForm2Screen } from '../../screens/common/solicitarServicos/ServicesForm2Screen'
import { ServicesForm3Screen } from '../../screens/common/solicitarServicos/ServicesForm3Screen'
import { ServicesScreen2 } from '../../screens/common/solicitarServicos/ServicesScreen2'
import { SolicitarServicoFormContextProvider } from '../../store/SolicitarServicosContext'
import { SuaEmpresaAqui1 } from '../../screens/common/suaEmpresaAqui/SuaEmpresaAqui1'
import { CadastrarEmpresaContextProvider } from '../../store/CadastrarEmpresaContext'
import { AnyScreen } from '../../screens/AnyScreen'
import { CadastrarEmpresaScreen1 } from '../../screens/common/suaEmpresaAqui/CadastrarEmpresaScreen1'
import { CadastrarEmpresaScreen2 } from '../../screens/common/suaEmpresaAqui/CadastrarEmpresaScreen2'
import { PaginaEmConstrucao } from '../../screens/public/PaginaEmConstrucao'
import { SaudeHomeScreen } from '../../screens/common/saude/SaudeHomeScreen'
import { MapaDeCovidScreen } from '../../screens/common/saude/MapaDeCovidScreen'
import { MapaDeDengueScreen } from '../../screens/common/saude/MapaDeDengueScreen'

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
				justifyContent: 'center'
			}}
		>
			<Pressable style={{}} android_ripple={{ color: '#ccc' }} onPress={() => navigation.goBack()}>
				<Ionicons name='chevron-back' size={35} />
			</Pressable>
		</View>
	)
}

export function SaudeRouter() {
	return (
		<CadastrarEmpresaContextProvider>
			<Stack.Navigator
				initialRouteName='SaudeHome'
				screenOptions={({ navigation }) => ({
					headerTitleAlign: 'center',
					headerLeft: () => customBackButton(navigation)
				})}
			>
				<Stack.Screen
					name='SaudeHome'
					component={SaudeHomeScreen}
					options={{
						title: 'Solicitar Serviços',
						animation: 'none'
					}}
				/>
				<Stack.Screen
					name='SaudeMapaCovid'
					component={MapaDeCovidScreen}
					options={{
						animation: 'none'
					}}
				/>
				<Stack.Screen
					name='SaudeMapaDengue'
					component={MapaDeDengueScreen}
					options={{
						animation: 'none'
					}}
				/>
			</Stack.Navigator>
		</CadastrarEmpresaContextProvider>
	)
}

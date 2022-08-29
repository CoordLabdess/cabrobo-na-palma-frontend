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

export function SuaEmpresaAquiRouter() {
	return (
		<CadastrarEmpresaContextProvider>
			<Stack.Navigator
				initialRouteName='SuaEmpresaAquiHome'
				screenOptions={({ navigation }) => ({
					headerTitleAlign: 'center',
					headerLeft: () => customBackButton(navigation)
				})}
			>
				<Stack.Screen
					name='SuaEmpresaAquiHome'
					component={SuaEmpresaAqui1}
					options={{
						title: 'Solicitar Serviços',
						animation: 'none'
					}}
				/>
				<Stack.Screen
					name='procurarEstabelecimento'
					component={AnyScreen}
					options={{
						title: 'Solicitar Serviços',
						animation: 'none'
					}}
				/>
				<Stack.Screen
					name='cadastrarEmpresa'
					component={CadastrarEmpresaScreen1}
					options={{
						title: 'Solicitar Serviços',
						animation: 'none'
					}}
				/>
				<Stack.Screen
					name='cadastrarEmpresa2'
					component={CadastrarEmpresaScreen2}
					options={{
						title: 'Solicitar Serviços',
						animation: 'none'
					}}
				/>
			</Stack.Navigator>
		</CadastrarEmpresaContextProvider>
	)
}

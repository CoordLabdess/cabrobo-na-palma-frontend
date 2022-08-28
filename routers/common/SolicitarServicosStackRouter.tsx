import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Image, Platform, Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { HomeScreen, ServicesScreen } from '../../screens'
import { ServicesForm1Screen } from '../../screens/common/solicitarServicos/ServicesForm1Screen'
import { ServicesForm2Screen } from '../../screens/common/solicitarServicos/ServicesForm2Screen'
import { ServicesForm3Screen } from '../../screens/common/solicitarServicos/ServicesForm3Screen'
import { ServicesScreen2 } from '../../screens/common/solicitarServicos/ServicesScreen2'
import { SolicitarServicoFormContextProvider } from '../../store/SolicitarServicosContext'

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

export function SolicitarServicosStackRouter() {
	return (
		<SolicitarServicoFormContextProvider>
			<Stack.Navigator
				initialRouteName='SolicitarServicosMajor'
				screenOptions={({ navigation }) => ({
					headerTitleAlign: 'center',
					headerLeft: () => customBackButton(navigation)
				})}
			>
				<Stack.Screen
					name='SolicitarServicosMajor'
					component={ServicesScreen}
					options={{
						title: 'Solicitar Serviços',
						animation: 'none'
					}}
				/>
				<Stack.Screen name='SolicitarServicosMinor' component={ServicesScreen2} />
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
		</SolicitarServicoFormContextProvider>
	)
}

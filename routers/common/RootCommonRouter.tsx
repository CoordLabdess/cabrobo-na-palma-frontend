import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../../constants/colors'
import { PaginaEmConstrucao } from '../../screens/public/PaginaEmConstrucao'
import { NoticiasHomeScreen } from '../../screens/common/noticias/NoticiasHomeScreen'

import { ComingSoon, HomeScreen, ProfileScreen, ServicesScreen } from '../../screens'

import { RootStackParamList, RootTabParamList } from '../../types/routes'
import { ServicesScreen2 } from '../../screens/common/solicitarServicos/ServicesScreen2'
import { ServicesForm1Screen } from '../../screens/common/solicitarServicos/ServicesForm1Screen'
import { ServicesForm2Screen } from '../../screens/common/solicitarServicos/ServicesForm2Screen'
import { ServicesForm3Screen } from '../../screens/common/solicitarServicos/ServicesForm3Screen'
import { SuaEmpresaAqui1 } from '../../screens/common/suaEmpresaAqui/SuaEmpresaAqui1'
import { CadastrarEmpresaScreen1 } from '../../screens/common/suaEmpresaAqui/CadastrarEmpresaScreen1'
import { CadastrarEmpresaScreen2 } from '../../screens/common/suaEmpresaAqui/CadastrarEmpresaScreen2'
import { SaudeHomeScreen } from '../../screens/common/saude/SaudeHomeScreen'
import { MapaDeCovidScreen } from '../../screens/common/saude/MapaDeCovidScreen'
import { MapaDeDengueScreen } from '../../screens/common/saude/MapaDeDengueScreen'
import { EducacaoHomeScreen } from '../../screens/common/educacao/EducacaoHomeScreen'
import { PontosDeColetaScreen } from '../../screens/common/educacao/PontosDeColetaScreen'
import { MenuScreen } from '../../screens/common/MenuScreen'
import { PersonalData } from '../../screens/common/ProfileScreen/PersonalData'
import EstablishmentsListScreen from '../../screens/common/EstablishmentsListScreen'
import { AssistenciaSocialScreen } from '../../screens/common/assistenciaSocial/AssistenciaSocialScreen'
import { AuxilioBrasilScreen } from '../../screens/common/assistenciaSocial/AuxilioBrasilScreen'
import { LoginScreen } from '../../screens/public/LoginScreen'
import SignUpScreen from '../../screens/public/SignUpScreen'
import RequestsListScreen from '../../screens/common/Requests'


const BottomTab = createBottomTabNavigator<RootTabParamList>()

function RootCommonRouter() {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarStyle: {
					backgroundColor: COLORS.primary500,
					height: Platform.OS === 'ios' ? 80 : 65,
					paddingBottom: Platform.OS === 'ios' ? 20 : 0,
				},
				tabBarInactiveTintColor: COLORS.secondary100,
				tabBarActiveTintColor: COLORS.secondary100,
			}}
		>
			<BottomTab.Screen
				name='RootInicio'
				component={HomeScreen}
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
					},
				}}
			/>
			{/* <BottomTab.Screen
				name='RootPerfil'
				component={ProfileScreen}
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
					},
				}}
			/> */}
			<BottomTab.Screen
				name='RootNoticias'
				component={NoticiasHomeScreen}
				options={{
					tabBarLabel: () => null,
					tabBarIcon: tabInfo => {
						return (
							<Ionicons
								name={tabInfo.focused ? 'newspaper-sharp' : 'newspaper-outline'}
								size={40}
								color={tabInfo.color}
							/>
						)
					},
				}}
			/>
			{/* <BottomTab.Screen
				name='RootConfiguracoes'
				component={MenuScreen}
				options={{
					tabBarLabel: () => null,

					tabBarIcon: tabInfo => {
						return (
							<Ionicons
								name={tabInfo.focused ? 'options-sharp' : 'options-outline'}
								size={40}
								color={tabInfo.color}
							/>
						)
					},
				}}
			/> */}
		</BottomTab.Navigator>
	)
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function HomeNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Root' component={RootCommonRouter} />
			<Stack.Screen
				name='Login'
				component={LoginScreen}
				options={{
					title: 'Login',
					animation: 'slide_from_right',
				}}
			/>
			<Stack.Screen
				name='Signup'
				component={SignUpScreen}
				options={{
					title: 'Cadastro',
					animation: 'slide_from_right',
				}}
			/>
			<Stack.Screen
				name='SolicitarServicos'
				component={ServicesScreen}
				options={{
					animation: 'none',
				}}
			/>
			<Stack.Screen name='SolicitarServicosMinor' component={ServicesScreen2} />
			<Stack.Screen
				name='SolicitarServicosForm1'
				component={ServicesForm1Screen}
				options={{
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='RequestsScreen'
				component={RequestsListScreen}
				options={{
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='PersonalData'
				component={PersonalData}
				options={{
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='SolicitarServicosForm2'
				component={ServicesForm2Screen}
				options={{
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='SolicitarServicosForm3'
				component={ServicesForm3Screen}
				options={{
					animation: 'none',
				}}
			/>

			<Stack.Screen
				name='SuaEmpresaAqui'
				component={SuaEmpresaAqui1}
				options={{
					title: 'Solicitar Serviços',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='procurarEstabelecimento'
				component={EstablishmentsListScreen}
				options={{
					title: 'Procurar Estabelecimento',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='cadastrarEmpresa'
				component={CadastrarEmpresaScreen1}
				options={{
					title: 'Cadastrar Empresa',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='cadastrarEmpresa2'
				component={CadastrarEmpresaScreen2}
				options={{
					title: 'Solicitar Serviços',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='Saude'
				component={SaudeHomeScreen}
				options={{
					title: 'Solicitar Serviços',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='SaudeMapaCovid'
				component={MapaDeCovidScreen}
				options={{
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='SaudeMapaDengue'
				component={MapaDeDengueScreen}
				options={{
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='Educacao'
				component={EducacaoHomeScreen}
				options={{
					title: 'Educação',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='PontosDeColeta'
				component={PontosDeColetaScreen}
				options={{
					title: 'Pontos de Coleta',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='AssistenciaSocial'
				component={AssistenciaSocialScreen}
				options={{
					title: 'Assistência Social',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name='AuxilioBrasil'
				component={AuxilioBrasilScreen}
				options={{
					title: 'Auxílio Brasil',
					animation: 'none',
				}}
			/>

			<Stack.Screen name='ComingSoon' component={PaginaEmConstrucao} />
		</Stack.Navigator>
	)
}

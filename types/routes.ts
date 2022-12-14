import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	SolicitarServicos: undefined
	Root: NavigatorScreenParams<RootTabParamList> | undefined
	Login: undefined
	Signup: undefined
	RequestsScreen: undefined
	SolicitarServicosMinor: undefined
	SolicitarServicosForm1: undefined
	SolicitarServicosForm2: undefined
	SolicitarServicosForm3: undefined
	SuaEmpresaAqui: undefined
	procurarEstabelecimento: undefined
	cadastrarEmpresa: undefined
	cadastrarEmpresa2: undefined
	Saude: undefined
	SaudeMapaCovid: undefined
	Educacao: undefined
	SaudeMapaDengue: undefined
	PontosDeColeta: undefined
	PersonalData: undefined
	ComingSoon: undefined
	ChooseAddress: undefined
}

export type RoutesType =
	| 'SolicitarServicos'
	| 'Root'
	| 'SolicitarServicosMinor'
	| 'SolicitarServicosForm1'
	| 'SolicitarServicosForm2'
	| 'SolicitarServicosForm3'
	| 'SuaEmpresaAqui'
	| 'procurarEstabelecimento'
	| 'cadastrarEmpresa'
	| 'cadastrarEmpresa2'
	| 'Saude'
	| 'SaudeMapaCovid'
	| 'Educacao'
	| 'SaudeMapaDengue'
	| 'PontosDeColeta'
	| 'ComingSoon'
	| 'ChooseAddress'

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	Screen
>

export type RootTabParamList = {
	RootInicio: undefined
	RootPerfil: undefined
	RootNoticias: undefined
	RootConfiguracoes: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<RootTabParamList, Screen>,
	NativeStackScreenProps<RootStackParamList>
>

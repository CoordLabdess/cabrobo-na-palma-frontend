import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Image, Platform, Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NoticiasHomeScreen } from '../../screens/common/noticias/NoticiasHomeScreen'
import { EducacaoHomeScreen } from '../../screens/common/educacao/EducacaoHomeScreen'
import { ComingSoon } from '../../screens'
import { PaginaEmConstrucao } from '../../screens/public/PaginaEmConstrucao'
import { PontosDeColetaScreen } from '../../screens/common/educacao/PontosDeColetaScreen'

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
				justifyContent: 'center',
			}}
		>
			<Pressable style={{}} android_ripple={{ color: '#ccc' }} onPress={() => navigation.goBack()}>
				<Ionicons name='chevron-back' size={35} />
			</Pressable>
		</View>
	)
}

export function EducacaoRouter() {
	return (
		<Stack.Navigator
			initialRouteName='EducacaoHome'
			screenOptions={({ navigation }) => ({
				headerTitleAlign: 'center',
				headerLeft: () => customBackButton(navigation),
			})}
		>
			<Stack.Screen
				name='EducacaoHome'
				component={EducacaoHomeScreen}
				options={{
					title: 'Notícias',
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
		</Stack.Navigator>
	)
}

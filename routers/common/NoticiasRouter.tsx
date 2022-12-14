import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Image, Platform, Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NoticiasHomeScreen } from '../../screens/common/noticias/NoticiasHomeScreen'

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

export function NoticiasRouter() {
	return (
		<Stack.Navigator
			initialRouteName='NoticiasHome'
			screenOptions={({ navigation }) => ({
				headerShown: false,
				headerTitleAlign: 'center',
				headerLeft: () => customBackButton(navigation),
			})}
		>
			<Stack.Screen
				name='NoticiasHome'
				component={NoticiasHomeScreen}
				options={{
					title: 'Notícias',
					animation: 'none',
				}}
			/>
		</Stack.Navigator>
	)
}

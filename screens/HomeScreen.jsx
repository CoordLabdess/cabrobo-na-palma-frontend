import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { UserHeader } from '../components/UserHeader'

export function HomeScreen() {
	const navigation = useNavigation()
	return (
		<View>
			<UserHeader />
			<Text>Home</Text>
			<Button
				title='Solicitar Serviços'
				onPress={() => {
					navigation.navigate('Services')
				}}></Button>
		</View>
	)
}

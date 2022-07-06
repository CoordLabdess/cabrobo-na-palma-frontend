import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function HomeScreen() {
	const navigation = useNavigation()
	return (
		<View>
			<Text>Home</Text>
			<Button
				title='Solicitar Serviços'
				onPress={() => {
					navigation.navigate('Services')
				}}></Button>
		</View>
	)
}

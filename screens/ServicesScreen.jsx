import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function ServicesScreen() {
	const navigation = useNavigation()
	return (
		<View>
			<Button
				title='Serviço 1'
				onPress={() => {
					navigation.navigate('ServiceForm')
				}}
			/>
		</View>
	)
}

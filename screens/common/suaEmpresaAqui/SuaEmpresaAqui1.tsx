import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function SuaEmpresaAqui1() {
	return (
		<SafeAreaView edges={['top', 'left', 'right']}>
			<FlatList
				data={[0, 1]}
				renderItem={() => {
					return (
						<View>
							<Text>Oi</Text>
						</View>
					)
				}}
			/>
		</SafeAreaView>
	)
}

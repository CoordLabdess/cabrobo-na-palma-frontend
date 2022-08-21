import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function AnyScreen() {
	return (
		<SafeAreaView style={styles.root}>
			<View>
				<Text>AnyScreen</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#fff'
	}
})

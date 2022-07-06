import { View, Text, Button, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { UserHeader } from '../components/UserHeader'
import { ToolsGrid } from '../components/home/ToolsGrid'
import { tools } from '../data/toolsData'

export function HomeScreen() {
	const navigation = useNavigation()
	return (
		<LinearGradient colors={['#277cb4', '#fff']} style={styles.root}>
			<UserHeader />
			<ToolsGrid toolsArray={tools} />
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1
	}
})

import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { UserHeader } from '../components/UserHeader'
import { ToolsGrid } from '../components/home/ToolsGrid'
import { allTools } from '../data/toolsData'

export function HomeScreen() {
	return (
		<LinearGradient colors={['#4480c5', '#fff']} style={styles.root}>
			<UserHeader />
			<ToolsGrid toolsArray={allTools} />
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1
	}
})

import { StyleSheet, Platform, StatusBar as SB, FlatList, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { allTools } from '../data/toolsData'
import { ToolItem } from '../components/home/ToolItem'
import { COLORS } from '../constants/colors'
import { UserHeader } from '../components/UserHeader'

export function HomeScreen() {
	return (
		<SafeAreaView style={styles.root} edges={['top']}>
			<LinearGradient colors={['#4480c5', '#fff']} style={styles.root}>
				<View style={styles.toolsGridContainer}>
					<FlatList
						ListHeaderComponent={UserHeader}
						showsVerticalScrollIndicator={false}
						alwaysBounceVertical={false}
						style={styles.toolsGrid}
						data={allTools}
						keyExtractor={item => {
							return item.id.toString()
						}}
						renderItem={itemData => {
							return <ToolItem tool={itemData.item} />
						}}
						numColumns={2}
					/>
				</View>
			</LinearGradient>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#fff'
	},
	toolsGridContainer: {
		flex: 1,
		alignItems: 'center'
	},
	toolsGrid: {
		flexGrow: 1
	}
})

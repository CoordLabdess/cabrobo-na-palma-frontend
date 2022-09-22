import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Box, HStack } from 'native-base'
import { allTools } from '../data/toolsData'
import { ToolItem } from '../components/home/ToolItem'
import { COLORS } from '../constants/colors'
import { UserHeader } from '../components/UserHeader'

export function HomeScreen() {
	return (
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
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#fff',
	},
	toolsGridContainer: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 10,
	},
	toolsGrid: {
		width: '100%',
	},
})

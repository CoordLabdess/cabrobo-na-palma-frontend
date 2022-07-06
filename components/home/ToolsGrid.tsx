import { View, Text, FlatList, StyleSheet } from 'react-native'
import { ToolItem } from './ToolItem'
import { Tool } from '../../types/global'
import { COLORS } from '../../constants/colors'

interface ToolsGridProps {
	toolsArray: Tool[]
}

export function ToolsGrid(props: ToolsGridProps) {
	return (
		<View style={styles.toolsGridContainer}>
			<View>
				<Text style={styles.toolsGridTitle}>O que você precisa hoje?</Text>
				<FlatList
					style={styles.toolsGrid}
					data={props.toolsArray}
					keyExtractor={item => {
						return item.id.toString()
					}}
					renderItem={itemData => {
						return <ToolItem tool={itemData.item} />
					}}
					numColumns={2}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	toolsGridContainer: {
		marginTop: 20,
		height: 400,
		alignItems: 'center',
		width: '100%'
	},
	toolsGrid: {
		flex: 1
	},
	toolsGridTitle: {
		color: COLORS.primary500,
		fontWeight: '600',
		fontSize: 15,
		width: '100%',
		marginLeft: 5,
		textAlign: 'left',
		marginBottom: 10
	}
})

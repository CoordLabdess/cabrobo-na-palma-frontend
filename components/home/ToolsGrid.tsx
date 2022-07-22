import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import { ToolItem } from '../../components/home/ToolItem'
import { Tool } from '../../types/global'
import { COLORS } from '../../constants/colors'
import { UserHeader } from '../UserHeader'

interface ToolsGridProps {
	toolsArray: Tool[]
}

export function ToolsGrid(props: ToolsGridProps) {
	return (
		<View style={styles.toolsGridContainer}>
			<FlatList
				ListHeaderComponent={UserHeader}
				scrollEnabled={false}
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
	)
}

const styles = StyleSheet.create({
	toolsGridContainer: {
		marginTop: 20,
		flex: 1,
		alignItems: 'center'
	},
	toolsGrid: {
		backgroundColor: 'red',
		height: '100%',
		flexGrow: 0
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

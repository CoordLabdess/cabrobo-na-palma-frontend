import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import { MajorService, MinorService } from '../../types/global'
import { COLORS } from '../../constants/colors'
import { ServiceItem } from './ServiceItem'

interface ServicesGridProps {
	servicesArray: MajorService[] | MinorService[]
}

export function ServicesGrid(props: ServicesGridProps) {
	if (!props.servicesArray) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		)
	}

	return (
		<View style={styles.servicesGridContainer}>
			<View>
				<FlatList
					style={styles.servicesGrid}
					data={props.servicesArray}
					keyExtractor={item => {
						return item.id.toString()
					}}
					renderItem={itemData => {
						return <ServiceItem service={itemData.item} />
					}}
					numColumns={1}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	servicesGridContainer: {
		marginTop: 20,
		width: Dimensions.get('screen').width,
		alignItems: 'center'
	},
	servicesGrid: {
		width: '100%'
	},
	servicesGridTitleContainer: {
		width: '100%',
		paddingHorizontal: 45
	},
	servicesGridTitle: {
		color: COLORS.secondary500,
		fontWeight: '400',
		fontSize: 15,
		marginLeft: 5,
		textAlign: 'left',
		marginBottom: 30
	}
})

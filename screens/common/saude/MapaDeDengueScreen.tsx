import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS } from '../../../constants/colors'

import { DengueMap } from '../../../components/maps/DengueMap'

export function MapaDeDengueScreen() {
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Mapa de Dengue'
		})
	}, [])

	return (
		<View style={styles.root}>
			<Text style={styles.title}>Mapa de calor dos casos de dengue no município</Text>
			<View style={{ width: '100%', height: '60%' }}>
				<DengueMap />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		opacity: 0.5,
		fontWeight: '500',
		width: 300,
		textAlign: 'center',
		marginVertical: 10,
		fontSize: 18,
		color: COLORS.primary400
	},
	continueContainer: {
		width: '100%',
		marginVertical: 20,
		alignItems: 'center'
	}
})

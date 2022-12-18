import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import Header from '../../../components/common/Header'
import { fakePontosTuristicos } from '../../../data/fakeData'
import { TurismoListItem } from '../../../components/listItems/TurismoListItem'
import { COLORS } from '../../../constants/colors'

export function PontoTuristicosScreen() {
	const navigation = useNavigation()

	return (
		<>
			<Header goBack title='Pontos Turísticos' />
			<ScrollView
				keyboardShouldPersistTaps='handled'
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-start',
					paddingHorizontal: '5%',
					alignItems: 'center',
					paddingBottom: 20,
				}}
				alwaysBounceVertical={false}
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.description}>
					Selecione algum dos pontos turísticos abaixo, para ver mais detalhes.
				</Text>
				{fakePontosTuristicos.map(fp => {
					return (
						<TurismoListItem
							key={fp.id}
							pontoTuristico={fp}
							onPress={() => navigation.navigate('DetalhesPontoTuristico', { PontoTuristico: fp })}
						/>
					)
				})}
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	description: {
		color: COLORS.secondary500,
		textAlign: 'center',
		maxWidth: '60%',
		fontSize: 16,
		marginVertical: 20,
	},
})

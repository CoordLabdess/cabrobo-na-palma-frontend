import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FormStepsBar } from '../../../components/form/FormStepsBar'
import { HTMLMap } from '../../../components/HTMLMap'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { COLORS } from '../../../constants/colors'
import { Coords } from '../../../types/global'
import { SolicitarServicoFormContext } from '../../../store/SolicitarServicosContext'
import { allMinorServices } from '../../../data/minorServices'

export function ServicesForm1Screen() {
	const navigation = useNavigation()
	const ServicesCtx = useContext(SolicitarServicoFormContext)
	const mService = allMinorServices.filter(
		minService => minService.id === ServicesCtx.minorServiceId
	)[0]

	useLayoutEffect(() => {
		navigation.setOptions({
			title: mService.title
		})
	}, [])

	return (
		<View style={styles.root}>
			<View style={{ marginVertical: 10, width: '100%', alignItems: 'center' }}>
				<FormStepsBar maxSteps={3} currentStep={1} />
			</View>
			<Text style={styles.title}>Selecione no mapa a localização do problema.</Text>
			<View style={{ width: '100%', height: '60%' }}>
				<HTMLMap onCoordsChange={c => ServicesCtx.updateData('coords', c)} />
			</View>
			<View style={styles.continueContainer}>
				<PrimaryButton
					onPress={() => {
						if (ServicesCtx.data['coords']) {
							navigation.navigate('SolicitarServicosForm2' as never)
						}
					}}
					title='Continuar'
				/>
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
		marginBottom: 10,
		fontSize: 18,
		color: COLORS.primary400
	},
	continueContainer: {
		width: '100%',
		marginVertical: 20,
		alignItems: 'center'
	}
})

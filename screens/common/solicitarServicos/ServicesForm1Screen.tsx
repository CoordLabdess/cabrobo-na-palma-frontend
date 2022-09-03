import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable } from 'react-native'
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
	const [error, setError] = useState(false)
	const mService = allMinorServices.filter(
		minService => minService.id === ServicesCtx.minorServiceId
	)[0]
	const [lockedMap, setLockedMap] = useState(true)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: mService.title
		})
	}, [])

	return (
		<ScrollView
			scrollEnabled={lockedMap}
			contentContainerStyle={{
				flexGrow: 1,
				justifyContent: 'flex-start',
				alignItems: 'center'
			}}
			alwaysBounceVertical={false}
			showsVerticalScrollIndicator={false}
		>
			<Pressable
				onTouchMove={() => setLockedMap(true)}
				onTouchStart={() => setLockedMap(true)}
				style={{ marginVertical: 10, width: '100%', alignItems: 'center' }}
			>
				<FormStepsBar maxSteps={3} currentStep={1} />
			</Pressable>
			<Text style={styles.title}>Selecione no mapa a localização do problema.</Text>
			<View style={{ width: '100%', height: Dimensions.get('window').height * 0.5 }}>
				<HTMLMap onCoordsChange={c => ServicesCtx.updateData('coords', c)} />
				{lockedMap && (
					<Pressable
						onPress={() => setLockedMap(false)}
						style={{
							width: '100%',
							height: '100%',
							position: 'absolute',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<View
							style={{
								backgroundColor: '#000',
								opacity: 0.3,
								width: '100%',
								height: '100%',
								position: 'absolute'
							}}
						/>
						<Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>
							Clique para liberar o mapa
						</Text>
					</Pressable>
				)}
			</View>

			<Pressable
				style={{ flex: 1, width: '100%', alignItems: 'center' }}
				onTouchMove={() => setLockedMap(true)}
				onTouchStart={() => setLockedMap(true)}
			>
				{error && (
					<View style={{ marginTop: 15 }}>
						<Text style={{ color: 'red', fontSize: 14, fontWeight: '400' }}>
							Selecione um local no mapa
						</Text>
					</View>
				)}
				<View style={styles.continueContainer}>
					<PrimaryButton
						onPress={() => {
							if (ServicesCtx.data['coords']) {
								setError(false)
								navigation.navigate('SolicitarServicosForm2' as never)
							} else {
								setError(true)
							}
						}}
						title='Continuar'
					/>
				</View>
			</Pressable>
		</ScrollView>
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

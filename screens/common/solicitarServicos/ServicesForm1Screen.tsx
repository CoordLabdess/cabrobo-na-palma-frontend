import React, { useLayoutEffect, useState, useRef, useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FormStepsBar } from '../../../components/form/FormStepsBar'
import { HTMLMap } from '../../../components/HTMLMap'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { COLORS } from '../../../constants/colors'
import { Coords } from '../../../types/global'
import { allMinorServices } from '../../../data/minorServices'
import { useServiceRequestForm } from '../../../store/SolicitarServicosContext'
import Header from '../../../components/common/Header'
import { RoutesType } from '../../../types/routes'
import { AuthContext } from '../../../store/AuthContext'

export function ServicesForm1Screen() {
	const { location } = useContext(AuthContext)
	const navigation = useNavigation()
	const { updateData, data, minorServiceId } = useServiceRequestForm()
	const [error, setError] = useState(false)
	const mService = allMinorServices.filter(minService => minService.id === minorServiceId)[0]
	const [lockedMap, setLockedMap] = useState(true)
	const scrollViewRef = useRef<ScrollView>(null)
	const [initialCoords, setInitialCoords] = useState<Coords | null>(null)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: mService.title,
		})
	}, [])

	return (
		<>
			<Header goBack title={mService.title} />
			<ScrollView
				scrollEnabled={lockedMap}
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
				alwaysBounceVertical={false}
				showsVerticalScrollIndicator={false}
			>
				<Pressable
					onTouchMove={() => setLockedMap(true)}
					onTouchStart={() => setLockedMap(true)}
					style={{ marginVertical: 10, width: '100%', alignItems: 'center' }}
				>
					<FormStepsBar style={{ marginBottom: 10 }} maxSteps={3} currentStep={1} />
					<Text style={styles.title}>Selecione no mapa a localização do problema.</Text>
				</Pressable>

				<View style={{ width: '100%', height: Dimensions.get('window').height * 0.57 }}>
					<HTMLMap
						initialCoords={location}
						onFirstMark={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
						onCoordsChange={c => updateData('coords', c)}
					/>
					{lockedMap && (
						<Pressable
							onPress={() => setLockedMap(false)}
							style={{
								width: '100%',
								height: '100%',
								position: 'absolute',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									backgroundColor: '#000',
									opacity: 0.3,
									width: '100%',
									height: '100%',
									position: 'absolute',
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
								if (data['coords']) {
									setError(false)
									navigation.navigate('SolicitarServicosForm2' as RoutesType)
								} else {
									setError(true)
								}
							}}
							title='Continuar'
						/>
					</View>
				</Pressable>
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		opacity: 0.5,
		fontWeight: '500',
		width: 300,
		textAlign: 'center',
		fontSize: 18,
		color: COLORS.primary400,
	},
	continueContainer: {
		width: '100%',
		marginVertical: 20,
		alignItems: 'center',
	},
})

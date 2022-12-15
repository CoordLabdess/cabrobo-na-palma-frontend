import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FormStepsBar } from '../../../components/form/FormStepsBar'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { COLORS } from '../../../constants/colors'
import { useRegisterEnterprise } from '../../../store/CadastrarEmpresaContext'
import { HTMLMapEmpresas } from '../../../components/HTMLMapEmpresas'
import Header from '../../../components/common/Header'
import { HTMLMap } from '../../../components/HTMLMap'

export function CadastrarEmpresaScreen1() {
	const navigation = useNavigation()
	const cadastrarEmpresaCtx = useRegisterEnterprise()
	const scrollViewRef = useRef<ScrollView>(null)
	const [error, setError] = useState(false)
	const [lockedMap, setLockedMap] = useState(true)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Cadastrar Empresa',
		})
	}, [])

	return (
		<>
			<Header goBack title='Cadastrar sua empresa' />
			<ScrollView
				scrollEnabled={lockedMap}
				ref={scrollViewRef}
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
					style={{ paddingVertical: 10, width: '100%', alignItems: 'center' }}
				>
					<FormStepsBar maxSteps={2} currentStep={1} />
					<Text style={styles.title}>Selecione a localização da sua empresa.</Text>
				</Pressable>

				<View style={{ width: '100%', height: Dimensions.get('window').height * 0.5 }}>
					<HTMLMap
						featuresURL={[
							'https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/Estabelecimentos/FeatureServer/0',
						]}
						onFirstMark={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
						onCoordsChange={c =>
							cadastrarEmpresaCtx.updateData({ ...cadastrarEmpresaCtx.data, coords: c })
						}
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
					<View
						style={{
							width: '90%',
							height: 200,
							flexDirection: 'row',
							overflow: 'hidden',
							justifyContent: 'space-around',
							marginTop: 10,
						}}
					>
						<Image
							resizeMode='contain'
							style={{ height: '100%', width: '100%' }}
							source={require('../../../assets/services/saude/legenda1MapaEstabelecimentos.png')}
						/>
						<Image
							resizeMode='contain'
							style={{ height: '100%', width: '100%' }}
							source={require('../../../assets/services/saude/legenda2MapaEstabelecimentos.png')}
						/>
					</View>
					<View style={styles.continueContainer}>
						<PrimaryButton
							onPress={() => {
								if (cadastrarEmpresaCtx.data?.coords) {
									setError(false)
									navigation.navigate('cadastrarEmpresa2')
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
		marginTop: 10,
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

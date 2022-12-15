import React, { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable, ScrollView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../../constants/colors'
import { CovidMap } from '../../../components/maps/CovidMap'
import Header from '../../../components/common/Header'
import { HTMLMap } from '../../../components/HTMLMap'

export function MapaDeCovidScreen() {
	const navigation = useNavigation()
	const [lockedMap, setLockedMap] = useState(true)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Mapa de COVID-19',
		})
	}, [])

	return (
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
			<Header goBack title={'Mapa de COVID-19'} />
			<Pressable
				style={{ width: '100%', alignItems: 'center' }}
				onTouchMove={() => setLockedMap(true)}
				onTouchStart={() => setLockedMap(true)}
			>
				<Text style={styles.title}>Mapa de calor dos casos de COVID-19 no município</Text>
			</Pressable>
			<View style={{ width: '100%', height: Dimensions.get('window').height * 0.5 }}>
				<HTMLMap
					avoidChangeCoords
					featuresURL={[
						'https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/US_Covid_APP/FeatureServer/0',
						// 'https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/US_Covid_APP___rotulo/FeatureServer/0',
						'https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/Covid_APP/FeatureServer/0',
					]}
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
				<View
					style={{
						width: '90%',
						height: 150,
						flexDirection: 'row',
						overflow: 'hidden',
						justifyContent: 'space-around',
					}}
				>
					<Image
						resizeMode='contain'
						style={{ height: '100%', width: '100%' }}
						source={require('../../../assets/services/saude/legenda1MapaCovid.png')}
					/>
					<Image
						resizeMode='contain'
						style={{ height: '100%', width: '100%' }}
						source={require('../../../assets/services/saude/legenda2MapaCovid.png')}
					/>
				</View>
			</Pressable>
		</ScrollView>
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
		marginVertical: 10,
		fontSize: 18,
		color: COLORS.primary400,
	},
	continueContainer: {
		width: '100%',
		marginVertical: 20,
		alignItems: 'center',
	},
	legenda1: {
		height: 100,
		width: 100,
	},
	legenda2: {
		height: 100,
		width: 100,
	},
	elementContainer: {
		width: '100%',
		alignItems: 'flex-start',
	},
})

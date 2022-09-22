import React, { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS } from '../../../constants/colors'

import { DengueMap } from '../../../components/maps/DengueMap'
import { PontosDeColetaMap } from '../../../components/maps/PontosDeColetaMap'
import Header from '../../../components/common/Header'

export function PontosDeColetaScreen() {
	const navigation = useNavigation()
	const [lockedMap, setLockedMap] = useState(true)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Pontos de Coleta',
		})
	}, [])

	return (
		<>
			<Header goBack />
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
					style={{ width: '100%', alignItems: 'center' }}
					onTouchMove={() => setLockedMap(true)}
					onTouchStart={() => setLockedMap(true)}
				>
					<Text style={styles.title}>Mapa dos pontos de coleta de materiais recicláveis</Text>
				</Pressable>
				<View style={{ width: '100%', height: Dimensions.get('window').height * 0.5 }}>
					<PontosDeColetaMap />
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
				/>
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

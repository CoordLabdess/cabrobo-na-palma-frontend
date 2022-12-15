import React, { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS } from '../../../constants/colors'

import { DengueMap } from '../../../components/maps/DengueMap'
import Header from '../../../components/common/Header'
import { HTMLMap } from '../../../components/HTMLMap'

export function MapaDeDengueScreen() {
	const navigation = useNavigation()
	const [lockedMap, setLockedMap] = useState(true)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Mapa de Dengue',
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
			<Header goBack title={'Mapa de Dengue'} />
			<Pressable
				style={{ width: '100%', alignItems: 'center' }}
				onTouchMove={() => setLockedMap(true)}
				onTouchStart={() => setLockedMap(true)}
			>
				<Text style={styles.title}>Mapa de calor dos casos de dengue no município</Text>
			</Pressable>
			<View style={{ width: '100%', height: Dimensions.get('window').height * 0.5 }}>
				4 gtb gtb6b6b6b66bbbbbbbbbbbbbbbbbbt6g 666b
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
						source={require('../../../assets/services/saude/legenda1MapaDengue.png')}
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

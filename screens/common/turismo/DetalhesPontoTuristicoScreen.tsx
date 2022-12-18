import { View, StyleSheet, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'

import Header from '../../../components/common/Header'
import { COLORS } from '../../../constants/colors'
import { DetalhesPontoTuristicoProps } from '../../../types/routes'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { MapModal } from '../../../components/modals/MapModal'

export function DetalhesPontoTuristicoScreen({ route, navigation }: DetalhesPontoTuristicoProps) {
	const pt = route.params.PontoTuristico

	const [mapModal, setMapModal] = useState(false)

	return (
		<>
			<View>
				<Header goBack title={pt.nome} />
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
					<View
						style={{
							width: '100%',
							borderRadius: 10,
							overflow: 'hidden',
							alignItems: 'center',
							marginVertical: 20,
						}}
					>
						<Image style={styles.thumbnail} resizeMode='cover' source={{ uri: pt.thumbnail }} />
					</View>
					<View style={{ width: '100%', marginBottom: 10 }}>
						<PrimaryButton title='Ver no mapa' onPress={() => setMapModal(true)} />
					</View>
					<Text
						style={[
							styles.description,
							{ fontWeight: '600', width: '100%', lineHeight: 0, marginTop: 10, fontSize: 18 },
						]}
					>
						Descrição
					</Text>
					<Text style={styles.description}>{pt.descricao}</Text>
				</ScrollView>
			</View>
			<MapModal
				visible={mapModal}
				title={pt.nome}
				initialCoords={pt.coords}
				message='Localização no mapa'
				buttonTitle='Voltar'
				onContinue={() => setMapModal(false)}
				onClose={() => setMapModal(false)}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	description: {
		color: COLORS.secondary500,
		fontSize: 16,
		paddingHorizontal: 10,
		lineHeight: 30,
		marginBottom: 20,
	},
	thumbnail: {
		height: 250,
		width: '100%',
	},
})

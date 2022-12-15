import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/common/Header'
import { SearchTextInput } from '../../../components/ui/textInputs/SearchTextInput'
import { addressToLocations, GeocodeAddressToLocationData } from '../../../utils/arcgis'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { COLORS } from '../../../constants/colors'

export function ChooseAddressScreen() {
	const navigation = useNavigation()

	const [address, setAddress] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState<GeocodeAddressToLocationData[] | null>(null)

	async function SearchAddresses() {
		if (!isLoading) {
			setIsLoading(true)
			await addressToLocations(address)
				.then(res => {
					setData(res)
					setIsLoading(false)
				})
				.catch(err => {
					setData(null)
					setIsLoading(false)
				})
		}
	}

	useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<>
			<Header goBack title='Pesquisar Endereço ' />
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
				alwaysBounceVertical={false}
				showsVerticalScrollIndicator={false}
			>
				<View style={{ width: '90%', maxWidth: 400, marginTop: 40, marginBottom: 20 }}>
					<SearchTextInput
						editable={!isLoading}
						value={address}
						onChangeText={text => setAddress(text)}
						autoFocus
						placeholder='Pesquise um endereço'
						onSubmit={SearchAddresses}
					/>
					<View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
						<PrimaryButton title='Pesquisar' onPress={SearchAddresses} isLoading={isLoading} />
					</View>
				</View>

				{data && (
					<>
						<View style={{ width: '80%', marginBottom: 20 }}>
							<Text style={{ textAlign: 'center', fontSize: 20 }}>
								Selecione algum dos resultados da busca:
							</Text>
						</View>

						{data.map((location, i) => {
							return (
								<View key={i} style={styles.locationCard}>
									<Pressable
										onPress={() => {
											navigation.navigate('SolicitarServicosForm1', {
												addressCoords: {
													longitude: location.location.x,
													latitude: location.location.y,
												},
											} as never)
										}}
										android_ripple={{ color: '#c3c3c3' }}
										style={({ pressed }) =>
											pressed && Platform.OS === 'ios'
												? [styles.pressed, styles.innerContainer]
												: styles.innerContainer
										}
									>
										<Text style={styles.description}>{location.attributes.LongLabel}</Text>
									</Pressable>
								</View>
							)
						})}
					</>
				)}
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	locationCard: {
		width: '80%',
		backgroundColor: '#fff',

		borderRadius: 10,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 3,
		shadowOpacity: 0.3,
		marginBottom: 20,
		marginHorizontal: 6,
		flexDirection: 'column',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	innerContainer: {
		height: '100%',
	},
	pressed: {
		backgroundColor: 'green',
	},
	description: {
		textAlign: 'center',
		margin: 10,
		textAlignVertical: 'center',
		fontSize: 23,
	},
})

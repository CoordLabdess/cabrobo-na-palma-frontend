import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Box, Button, HStack, Input, ScrollView, Text, VStack } from 'native-base'
import Header from '../../../components/common/Header'
import { COLORS } from '../../../constants/colors'
import { obterPessoasPorNis, PessoaFisicaDataReturn } from '../../../utils/arcgis'

export function AuxilioBrasilScreen() {
	const [nis, setNis] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [pessoaFisica, setPessoaFisica] = useState<PessoaFisicaDataReturn | null>(null)

	function handleSearch() {
		if (!isLoading) {
			setIsLoading(true)
			obterPessoasPorNis(nis)
				.then(res => {
					setIsLoading(false)
					setPessoaFisica(res[0])
				})
				.catch(err => {
					setIsLoading(false)
				})
		}
	}

	return (
		<>
			<Header title='Auxílio Brasil' goBack />
			<ScrollView showsVerticalScrollIndicator={false} flex={1} py={10}>
				<Box w='100%' alignItems='center'>
					<VStack w='80%' maxW={400} space={5} alignItems='center'>
						<Text textAlign='center' color={COLORS.secondary500}>
							Consulte se você possui direito ao auxílio Brasil digitando seu NIS no campo abaixo.
						</Text>
						<Input
							placeholder='Digite seu NIS'
							value={nis}
							onChangeText={text => setNis(text)}
							onSubmitEditing={() => {
								if (!isLoading) {
									handleSearch()
								}
							}}
						/>
						<Box w='60%' minW={180}>
							<Button
								isLoading={isLoading}
								onPress={handleSearch}
								backgroundColor={COLORS.primary500}
							>
								Consultar
							</Button>
						</Box>
					</VStack>
					{pessoaFisica && (
						<Box
							shadow={2}
							backgroundColor='#fff'
							borderRadius={5}
							w={300}
							mt={10}
							borderColor={COLORS.primary500}
							borderWidth={0}
							alignItems='center'
							p={4}
						>
							<VStack w='100%' alignItems='flex-start'>
								<HStack w='100%' mb={2}>
									<Text style={[styles.infoText, { fontWeight: '600' }]}>NIS: </Text>
									<Text flex={1} style={styles.infoText}>
										{pessoaFisica.attributes.NU_NIS_RF}
									</Text>
								</HStack>
								<HStack>
									<Text style={[styles.infoText, { fontWeight: '600' }]}>Nome: </Text>
									<Text flex={1} style={styles.infoText}>
										{pessoaFisica.attributes.NOME_RF.trim()}
									</Text>
								</HStack>
							</VStack>
						</Box>
					)}
				</Box>
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	infoText: {
		fontSize: 18,
		fontWeight: '400',
		color: COLORS.primary500,
	},
})

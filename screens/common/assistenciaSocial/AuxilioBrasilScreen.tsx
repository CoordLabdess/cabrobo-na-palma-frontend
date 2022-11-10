import React, { useState } from 'react'
import { Pressable, StyleSheet, ScrollView } from 'react-native'
import { Box, Button, HStack, Input, Text, VStack } from 'native-base'
import Header from '../../../components/common/Header'
import { COLORS } from '../../../constants/colors'
import {
	AssistenciaData,
	obterPessoasPorNis,
	obterProxDiaPagamento,
	PessoaFisicaDataReturn,
} from '../../../utils/arcgis'
import { CalendarioAuxilioBrasilModal } from '../../../components/modals/CalendarioAuxilioBrasilModal'

export function AuxilioBrasilScreen() {
	const [nis, setNis] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [pessoaFisica, setPessoaFisica] = useState<PessoaFisicaDataReturn | null>(null)
	const [proxData, setProxData] = useState<AssistenciaData | null>(null)
	const [semRegistro, setSemResgitro] = useState(false)
	const [exibirCalendario, setExibirCalendario] = useState(false)

	function handleSearch() {
		if (!isLoading) {
			setIsLoading(true)
			obterPessoasPorNis(nis)
				.then(res => {
					setIsLoading(false)
					setPessoaFisica(res[0])
					if (res.length < 1) {
						setSemResgitro(true)
					} else {
						setSemResgitro(false)
						setProxData(
							obterProxDiaPagamento(nis).filter(
								x =>
									Number(x.mes) >= new Date().getMonth() + 1 &&
									Number(x.dia) >= new Date().getDay(),
							)[0],
						)
					}
				})
				.catch(err => {
					setSemResgitro(false)
					setPessoaFisica(null)
					setIsLoading(false)
				})
		}
	}

	return (
		<>
			<Header title='Auxílio Brasil' goBack />
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingVertical: 20 }}
				alwaysBounceVertical={false}
			>
				<Box w='100%' alignItems='center'>
					<VStack w='80%' maxW={400} space={5} alignItems='center'>
						<Text textAlign='center' color={COLORS.secondary500}>
							Consulte se você possui direito ao auxílio Brasil digitando seu NIS no campo abaixo.
						</Text>
						<Input
							keyboardType='number-pad'
							placeholder='Digite seu NIS'
							fontSize={20}
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
								disabled={nis.length < 1}
								isLoading={isLoading}
								onPress={handleSearch}
								backgroundColor={COLORS.primary500}
							>
								Consultar
							</Button>
						</Box>
					</VStack>

					{pessoaFisica && (
						<>
							<Box
								shadow={2}
								backgroundColor='#fff'
								borderRadius={5}
								w={300}
								mt={10}
								borderColor={COLORS.primary500}
								borderWidth={0}
								alignItems='center'
								p={5}
							>
								<VStack w='100%' mb={2} alignItems='center'>
									<Text style={[styles.infoText, { fontWeight: '700' }]}>NIS</Text>
									<Text flex={1} style={styles.infoText}>
										{pessoaFisica.attributes.NU_NIS_RF}
									</Text>
								</VStack>
								<VStack w='100%' mb={2} alignItems='center'>
									<Text style={[styles.infoText, { fontWeight: '700' }]}>Nome</Text>
									<Text flex={1} style={styles.infoText}>
										{pessoaFisica.attributes.NOME_RF.trim()}
									</Text>
								</VStack>
								<VStack w='100%' mb={2} alignItems='center'>
									<Text style={[styles.infoText, { fontWeight: '700' }]}>Próximo Pagamento</Text>
									<Text flex={1} style={styles.infoText}>
										{`${proxData?.dia}/${proxData?.mes}/2022`}
									</Text>
								</VStack>
							</Box>
							<Pressable
								onPress={() => setExibirCalendario(true)}
								style={{ padding: 5, marginTop: 20 }}
							>
								<Text style={styles.details}>
									Clique aqui para conferir o calendário de pagamentos completo
								</Text>
							</Pressable>
						</>
					)}
					{semRegistro && (
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
								<VStack w='100%' mb={2} p={5} alignItems='center'>
									<Text style={[styles.infoText, { fontWeight: '600' }]}>
										O NIS informado não possui direito ao Auxílio
									</Text>
								</VStack>
							</VStack>
						</Box>
					)}
				</Box>
			</ScrollView>
			<CalendarioAuxilioBrasilModal
				isVisible={exibirCalendario}
				numFinalNis={nis.substring(nis.length - 1)}
				onClose={() => setExibirCalendario(false)}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	infoText: {
		fontSize: 24,
		fontWeight: '400',
		color: COLORS.primary500,
		textAlign: 'center',
		paddingVertical: 4,
		marginBottom: 5,
	},
	details: {
		color: COLORS.primary500,
		maxWidth: 300,
		fontSize: 20,
		textAlign: 'center',
	},
})

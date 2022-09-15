import React, { useContext, useLayoutEffect, useState } from 'react'
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FormStepsBar } from '../../../components/form/FormStepsBar'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { COLORS } from '../../../constants/colors'
import { allMinorServicesForm, FormPage } from '../../../data/minorServiceForm'
import { SolicitarServicoFormContext } from '../../../store/SolicitarServicosContext'
import { allMinorServices } from '../../../data/minorServices'
import { CadastrarEmpresaContext } from '../../../store/CadastrarEmpresaContext'
import { CadastrarEmpresaFormat, sendData } from '../../../utils/arcgis'
import { SuccessModal } from '../../../components/modals/SuccessModal'
import { generateFakeProtocol } from '../../../utils/fakeFunctions'

const fakeProtocol = generateFakeProtocol()

export function CadastrarEmpresaScreen2() {
	const navigation = useNavigation()
	const cadastrarEmpresaCtx = useContext(CadastrarEmpresaContext)
	const [success, setSuccess] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Cadastrar Empresa',
		})
	}, [])

	async function handleSubmit() {
		if (!isLoading && cadastrarEmpresaCtx.data.coords) {
			setIsLoading(true)
			const a: CadastrarEmpresaFormat = {
				name: cadastrarEmpresaCtx.data.nomeDoEstabelecimento || '',
				address: cadastrarEmpresaCtx.data.logradouro || '',
				phoneNumbe: cadastrarEmpresaCtx.data.telefoneParaContato || '',
				TIPO_ESTAB: cadastrarEmpresaCtx.data.tipoDoEstabelecimento || '',
			}
			await sendData(
				cadastrarEmpresaCtx.data.coords,
				a,
				'https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/Estabelecimentos_Comerciais/FeatureServer/0',
			)
				.then(res => {
					setSuccess(true)
					setIsLoading(false)
				})
				.catch(err => {
					setIsLoading(false)
				})
		}
	}

	function checkIfFieldsAreFilled() {
		if (
			cadastrarEmpresaCtx.data['logradouro']?.trim() &&
			cadastrarEmpresaCtx.data['nomeDoEstabelecimento']?.trim() &&
			cadastrarEmpresaCtx.data['telefoneParaContato']?.trim() &&
			cadastrarEmpresaCtx.data['tipoDoEstabelecimento']?.trim()
		) {
			return true
		}
		return false
	}

	return (
		<>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-start',
					alignItems: 'center',
					paddingBottom: 20,
				}}
				alwaysBounceVertical={false}
				showsVerticalScrollIndicator={false}
			>
				<View style={{ marginVertical: 10, width: '100%', alignItems: 'center' }}>
					<FormStepsBar maxSteps={2} currentStep={2} />
					<Text style={styles.pageTitle}>Informe os dados do estabelecimento</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle} />
					<View style={styles.field}>
						<Text style={styles.fieldLabel}>Logradouro</Text>
						<TextInput
							style={styles.textInput}
							placeholder='Digite aqui...'
							onChangeText={text => {
								cadastrarEmpresaCtx.updateData({ ...cadastrarEmpresaCtx.data, logradouro: text })
							}}
							value={cadastrarEmpresaCtx.data.logradouro || ''}
						/>
					</View>
					<View style={styles.field}>
						<Text style={styles.fieldLabel}>Nome do Estabelecimento</Text>
						<TextInput
							style={styles.textInput}
							placeholder='Digite aqui...'
							onChangeText={text => {
								cadastrarEmpresaCtx.updateData({
									...cadastrarEmpresaCtx.data,
									nomeDoEstabelecimento: text,
								})
							}}
							value={cadastrarEmpresaCtx.data.nomeDoEstabelecimento || ''}
						/>
					</View>
					<View style={styles.field}>
						<Text style={styles.fieldLabel}>Telefone para Contato</Text>
						<TextInput
							style={styles.textInput}
							placeholder='Digite aqui...'
							onChangeText={text => {
								cadastrarEmpresaCtx.updateData({
									...cadastrarEmpresaCtx.data,
									telefoneParaContato: text,
								})
							}}
							value={cadastrarEmpresaCtx.data.telefoneParaContato || ''}
						/>
					</View>
					<View style={styles.field}>
						<Text style={styles.fieldLabel}>Tipo de Estabelecimento</Text>
						<TextInput
							style={styles.textInput}
							placeholder='Digite aqui...'
							onChangeText={text => {
								cadastrarEmpresaCtx.updateData({
									...cadastrarEmpresaCtx.data,
									tipoDoEstabelecimento: text,
								})
							}}
							value={cadastrarEmpresaCtx.data.tipoDoEstabelecimento || ''}
						/>
					</View>
					<View style={styles.field}>
						<Text style={styles.fieldLabel}>{'Ponto de Referência (opcional)'}</Text>
						<TextInput
							style={styles.textInput}
							placeholder='Digite aqui...'
							onChangeText={text => {
								cadastrarEmpresaCtx.updateData({
									...cadastrarEmpresaCtx.data,
									pontoDeReferencia: text,
								})
							}}
							value={cadastrarEmpresaCtx.data.pontoDeReferencia || ''}
						/>
					</View>
				</View>
				{error && (
					<View style={{ marginTop: 15 }}>
						<Text style={{ color: 'red', fontSize: 14, fontWeight: '400' }}>
							Preencha todos os campos
						</Text>
					</View>
				)}
				<View style={styles.buttonContainer}>
					<PrimaryButton
						isLoading={isLoading}
						title='Continuar'
						onPress={() => {
							if (checkIfFieldsAreFilled()) {
								setError(false)
								handleSubmit()
							} else {
								setError(true)
							}
						}}
					/>
				</View>
			</ScrollView>
			<SuccessModal
				title='Sucesso!'
				visible={success}
				buttonTitle={'Voltar ao Início'}
				protocol={fakeProtocol}
				message={
					'O cadastro da sua empresa foi enviado com sucesso à prefeitura. Você poderá acompanhar o status do cadastro pelo protocolo abaixo:'
				}
				onContinue={() => navigation.navigate('SuaEmpresaAquiHome' as never)}
			/>
		</>
	)
}
const styles = StyleSheet.create({
	pageTitle: {
		fontSize: 18,
		color: COLORS.primary500,
		opacity: 0.5,
		fontWeight: '500',
		marginVertical: 10,
	},
	section: {
		width: '100%',
	},
	sectionTitle: {},
	field: {
		width: '100%',
		paddingHorizontal: '7%',
		marginBottom: 10,
	},
	fieldLabel: {
		fontWeight: '500',
		fontSize: 14,
		opacity: 1,
		color: COLORS.primary500,
	},
	textInput: {
		borderColor: COLORS.primary500,
		borderRadius: 14,
		borderWidth: 2,
		fontSize: 14,
		paddingHorizontal: 15,
		paddingVertical: 8,
		color: COLORS.primary400,
	},
	buttonContainer: {
		marginVertical: 20,
	},
})

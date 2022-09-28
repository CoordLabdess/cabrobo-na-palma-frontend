import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	Pressable,
	Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons'

import { FormStepsBar } from '../../../components/form/FormStepsBar'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { COLORS } from '../../../constants/colors'
import { allMinorServicesForm, FormPage } from '../../../data/minorServiceForm'
import { useServiceRequestForm } from '../../../store/SolicitarServicosContext'
import { GeneralServiceFormat, sendData } from '../../../utils/arcgis'
import { allMajorServices } from '../../../data/majorServices'
import { allMinorServices } from '../../../data/minorServices'
import { SuccessModal } from '../../../components/modals/SuccessModal'
import { generateFakeProtocol } from '../../../utils/fakeFunctions'
import { RoutesType } from '../../../types/routes'
import Header from '../../../components/common/Header'

interface FormData {
	[key: string]: any
}

export function ServicesForm3Screen() {
	const { minorServiceId, data, updateData } = useServiceRequestForm()

	const [formPage, setFormPage] = useState<FormPage | null>()
	const navigation = useNavigation()
	const [error, setError] = useState(false)
	const [serverError, setServerError] = useState(false)
	const ServicesCtx = useServiceRequestForm()
	const [isLoading, setIsLoading] = useState(false)
	const [successModal, setSuccessModal] = useState(false)
	const [protocol, setProtocol] = useState('000.000-000')
	const minService = allMinorServices.filter(
		minSrvc => minSrvc.id === ServicesCtx.minorServiceId,
	)[0]

	useLayoutEffect(() => {
		navigation.setOptions({
			title: minService.title,
		})
	}, [])

	async function pickImage(fieldAlias: string) {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			base64: true,
			// allowsEditing: true,
			// aspect: [1, 1],
			quality: 1,
		})

		if (!result.cancelled) {
			ServicesCtx.updateData(fieldAlias, result.uri)
		}
	}

	function handleSendingData() {
		if (!isLoading) {
			setIsLoading(true)
			const p = generateFakeProtocol()
			setProtocol(p)
			const d: GeneralServiceFormat = {
				BAIRRO: ServicesCtx.data.bairro || '',
				CIDADE: 'Cabrobó',
				NUMERO: Number(ServicesCtx.data.numero) || 0,
				COMPLEMENT: ServicesCtx.data.complemento || '',
				ENDEREÇO: 'Aguardando atualização da base de Cabrobó',
				PONTO_DE_R: ServicesCtx.data.pontoDeReferencia || '',
				SERVIÇO: allMajorServices
					.filter(mService => mService.id === ServicesCtx.majorServiceId)[0]
					.title.toUpperCase(),
				ESPECIFICA: ServicesCtx.data.especificacao || '',
				TEMPO: ServicesCtx.data.tempoDeOcorrencia || '',
				LOGRADOURO: ServicesCtx.data.logradouro || '',
				NOME: '',
				CPF: 0,
				OBSERVACAO: ServicesCtx.data.notes || '',
				TELEFONE: 0,
				PROTOCOLO: p,
				TIPO: allMinorServices.filter(mService => mService.id === ServicesCtx.minorServiceId)[0]
					.title,
			}
			sendData(ServicesCtx.data.coords || { latitude: 0, longitude: 0 }, d)
				.then(res => {
					setServerError(false)
					setSuccessModal(true)
					setIsLoading(false)
				})
				.catch(err => {
					setServerError(true)
					setIsLoading(false)
				})
		}
	}

	useLayoutEffect(() => {
		setFormPage(
			allMinorServicesForm.filter(
				minSrvForm => minSrvForm.minorServiceId === ServicesCtx.minorServiceId,
			)[0].pages[2],
		)
	}, [])

	function checkIfFieldsAreFilled() {
		if (ServicesCtx?.data['especificacao']?.trim()) {
			return true
		}
		return false
	}

	if (!formPage) {
		return (
			<View>
				<Text>Carregando...</Text>
			</View>
		)
	}

	return (
		<>
			<Header goBack />
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
					<FormStepsBar maxSteps={3} currentStep={3} />
					<Text style={styles.pageTitle}>{formPage.title}</Text>
				</View>
				{formPage.sections.map((section, key1) => {
					return (
						<View style={styles.section} key={key1}>
							<Text style={styles.sectionTitle}>{section.title}</Text>
							{section.fields.map((field, key2) => {
								return (
									<View style={styles.field} key={key2}>
										{field.type !== 'radioButton' && field.type !== 'checkBox' && (
											<Text style={styles.fieldLabel}>{field.label}</Text>
										)}
										{field.type === 'textInput' ? (
											<TextInput
												style={styles.textInput}
												placeholder='Digite aqui...'
												onChangeText={text => ServicesCtx.updateData(field.alias, text)}
												value={ServicesCtx.data[field.alias] || ''}
											/>
										) : field.type === 'textArea' ? (
											<TextInput
												style={[styles.textInput, { height: 70 }]}
												multiline
												numberOfLines={4}
												placeholder='Digite aqui...'
												onChangeText={text => ServicesCtx.updateData(field.alias, text)}
												value={ServicesCtx.data[field.alias] || ''}
											/>
										) : field.type === 'radioButton' ? (
											<Pressable
												style={styles.radioButtonContainer}
												onPress={() => ServicesCtx.updateData(section.alias, field.label)}
											>
												<View
													style={[
														styles.radioButton,
														ServicesCtx.data[section.alias] === field.label && {
															backgroundColor: COLORS.primary500,
														},
													]}
												/>
												<Text style={styles.fieldLabel}>{field.label}</Text>
											</Pressable>
										) : field.type === 'file' ? (
											<View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
												<Pressable
													style={{
														alignItems: 'center',
														borderWidth: 2,
														borderColor: COLORS.primary500,
														height: 250,
														width: 200,
														justifyContent: 'center',
													}}
													onPress={() => pickImage(field.alias)}
												>
													{!ServicesCtx.data[field.alias] ? (
														<>
															<Ionicons name='camera' color={COLORS.primary500} size={60} />
															<Text
																style={{
																	color: COLORS.primary500,
																	width: 190,
																	textAlign: 'center',
																}}
															>
																Toque para anexar uma imagem
															</Text>
														</>
													) : (
														<>
															<Image
																resizeMode='contain'
																style={{
																	flex: 1,
																	height: '100%',
																	width: '100%',
																	resizeMode: 'contain',
																}}
																source={{ uri: ServicesCtx.data[field.alias] }}
															/>
															<Pressable
																style={{ position: 'absolute', top: 10, right: 10 }}
																onPress={() => ServicesCtx.updateData(field.alias, null)}
															>
																<Ionicons name='close-circle' color={COLORS.primary500} size={35} />
															</Pressable>
														</>
													)}
												</Pressable>
											</View>
										) : (
											<View />
										)}
									</View>
								)
							})}
						</View>
					)
				})}
				{error && (
					<View style={{ marginTop: 15 }}>
						<Text style={{ color: 'red', fontSize: 14, fontWeight: '400' }}>
							Preencha todos os campos
						</Text>
					</View>
				)}
				{serverError && (
					<View style={{ marginTop: 15 }}>
						<Text style={{ color: 'red', fontSize: 14, fontWeight: '400' }}>
							Erro ao enviar a solicitação
						</Text>
					</View>
				)}
				<View style={styles.buttonContainer}>
					<PrimaryButton
						isLoading={isLoading}
						title='Enviar Formulário'
						onPress={() => {
							if (checkIfFieldsAreFilled()) {
								setError(false)
								handleSendingData()
							} else {
								setError(true)
							}
						}}
					/>
				</View>
				<SuccessModal
					visible={successModal}
					buttonTitle='Voltar ao início'
					message={`Parabéns! Sua solicitação foi enviada com sucesso à prefeitura. Número do protocolo gerado:`}
					protocol={protocol}
					onContinue={() => navigation.navigate('Root' as RoutesType)}
					title='Sucesso!'
				/>
			</ScrollView>
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
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 16,
		paddingHorizontal: '7%',
		fontWeight: '500',
		color: COLORS.primary500,
		marginBottom: 20,
	},
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
		textAlignVertical: 'top',
		borderColor: COLORS.primary500,
		borderRadius: 14,
		borderWidth: 2,
		fontSize: 14,
		paddingHorizontal: 15,
		paddingVertical: 8,
		color: COLORS.primary400,
	},
	buttonContainer: {
		padding: 20,
	},
	radioButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 5,
	},
	radioButton: {
		backgroundColor: '#fff',
		height: 20,
		width: 20,
		borderRadius: 100,
		marginRight: 10,
		borderColor: COLORS.primary500,
		borderWidth: 1,
	},
})

import { useContext, useLayoutEffect, useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TextInput, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { CleanTextButton } from '../../components/ui/buttons/CleanTextButton'
import { PrimaryButton } from '../../components/ui/PrimaryButton'
import { CleanTextInput } from '../../components/ui/textInputs/CleanTextInput'
import { COLORS } from '../../constants/colors'
import { AuthContext } from '../../store/AuthContext'
import { fakeLogin, fakeSendData } from '../../utils/fakeFunctions'
import { PrivacyPolicyModal } from '../../components/modals/PrivacyPolicyModal'
import { sendData } from '../../utils/arcgis'
import { removerCaracteresEspeciais } from '../../utils/validaçõesString'

export function LoginScreen() {
	const [cpf, setCpf] = useState('')
	const [password, setPassword] = useState('')
	const [viewModal, setViewModal] = useState(false)
	const [invalidCredentials, setInvalidCredentials] = useState(false)
	const [emptyCredentials, setEmptyCredentials] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [acceptedPolicy, setAcceptedPolicy] = useState(true)
	const authCtx = useContext(AuthContext)

	async function validate() {
		if (!isLoading) {
			setIsLoading(true)
			await fakeLogin(removerCaracteresEspeciais(cpf).trim(), password.trim())
				.then(() => {
					setIsLoading(false)
					authCtx.authenticate('a', 'Common')
				})
				.catch(error => {
					setIsLoading(false)
					setInvalidCredentials(true)
				})
		}
	}

	async function storeData(key: string, value: string) {
		try {
			await AsyncStorage.setItem(key, value)
		} catch (e) {
			console.log(e)
		}
	}

	async function getData(key: string) {
		try {
			const value = await AsyncStorage.getItem(key)
			setAcceptedPolicy(value === 'true')
			if (value) {
				return value
			}
			return ''
		} catch (e) {
			return ''
		}
	}

	function checkA(key: string) {
		getData('hasAcceptedPolicy').then(value => {
			setAcceptedPolicy(value === 'true')
		})
	}

	function writeCPF(text: string) {
		const s = removerCaracteresEspeciais(text).split('')
		if (s.length <= 11) {
			setCpf(
				s
					.map((b, i) => {
						if (i === 9) {
							return `-${b}`
						} else if (i === 3 || i === 6) {
							return `.${b}`
						} else {
							return b
						}
					})
					.join(''),
			)
		}
	}

	useLayoutEffect(() => {
		// storeData('hasAcceptedPolicy', 'false')
		checkA('hasAcceptedPolicy')
	}, [])

	return (
		<SafeAreaView style={styles.root} edges={['top', 'left', 'right']}>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
				alwaysBounceVertical={false}
				bounces={false}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.foreground}>
					<View style={styles.userIconContainer}>
						<Ionicons
							style={styles.userIcon}
							name='person-outline'
							size={120}
							color={COLORS.primary500}
						/>
					</View>
				</View>
				<View style={styles.loginCard}>
					<View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}>
						<CleanTextInput
							maxLength={14}
							editable={!isLoading}
							returnKeyType='next'
							keyboardType='number-pad'
							returnKeyLabel='Prox'
							style={styles.textInput}
							value={cpf}
							placeholder='CPF'
							onChangeText={text => {
								writeCPF(text)
							}}
						/>
					</View>
					<View style={[styles.elementContainer, { marginBottom: 40 }]}>
						<CleanTextInput
							editable={!isLoading}
							returnKeyType={'send'}
							onSubmit={validate}
							returnKeyLabel={'Pronto'}
							style={styles.textInput}
							value={password}
							secureTextEntry
							placeholder='Senha'
							onChangeText={text => setPassword(text)}
						/>
					</View>
					{invalidCredentials && (
						<View style={{ marginBottom: 15 }}>
							<Text style={{ color: 'red', fontSize: 14, fontWeight: '400' }}>
								Credenciais inválidas
							</Text>
						</View>
					)}
					<View style={[styles.elementContainer, { marginBottom: 10 }]}>
						<PrimaryButton
							style={{ minWidth: 200, width: '50%', maxWidth: 300, padding: 5 }}
							textStyle={{ fontSize: 22 }}
							title='Acessar'
							isLoading={isLoading}
							onPress={validate}
						/>
					</View>
					<View style={[styles.elementContainer, { marginBottom: 20 }]}>
						<CleanTextButton
							textStyle={styles.forgotPassword}
							title='Ver política de privacidade'
							onPress={() => {
								if (acceptedPolicy) {
									setViewModal(true)
								}
							}}
						/>
					</View>
					<View style={[styles.elementContainer]}>
						<View style={styles.logoContainer}>
							<Image style={styles.logo} source={require('../../assets/CabroboLogo.png')} />
						</View>
					</View>
				</View>
			</ScrollView>
			<PrivacyPolicyModal
				visible={!acceptedPolicy || viewModal}
				confirm={!viewModal}
				onCancel={() => {}}
				onConfirm={() => {
					storeData('hasAcceptedPolicy', 'true')
					checkA('hasAcceptedPolicy')
					setViewModal(false)
				}}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: COLORS.primary500,
	},
	foreground: {
		minHeight: 200,
		marginVertical: '15%',
	},
	userIconContainer: {
		backgroundColor: '#fff',
		borderRadius: 1000,
		height: 170,
		width: 170,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	userIcon: {},
	loginCard: {
		backgroundColor: '#fff',
		width: '100%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingBottom: 40,
		paddingTop: 30,
		overflow: 'hidden',
		alignItems: 'center',
	},
	title: {
		color: COLORS.primary500,
		fontSize: 60,
		fontWeight: '600',
	},
	forgotPassword: {
		fontSize: 16,
	},
	textInput: {
		fontSize: 20,
		width: '60%',
	},
	elementContainer: {
		width: '100%',
		alignItems: 'center',
	},
	logoContainer: {
		width: '60%',
		maxHeight: 100,
	},
	logo: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
})

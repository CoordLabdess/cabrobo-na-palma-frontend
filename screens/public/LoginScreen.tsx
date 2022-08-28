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
import { fakeSendData } from '../../utils/fakeFunctions'
import { PrivacyPolicyModal } from '../../components/modals/PrivacyPolicyModal'

export function LoginScreen() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [viewModal, setViewModal] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [acceptedPolicy, setAcceptedPolicy] = useState(true)
	const authCtx = useContext(AuthContext)

	async function validate() {
		if (!isLoading) {
			setIsLoading(true)
			await fakeSendData().then(() => {
				setIsLoading(false)
				authCtx.authenticate('a', 'Common')
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
					alignItems: 'center'
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
					<View style={{ marginBottom: 20 }}>
						<CleanTextInput
							style={styles.textInput}
							value={email}
							placeholder='E-mail'
							onChangeText={text => setEmail(text)}
						/>
					</View>
					<View style={[styles.elementContainer, { marginBottom: 40 }]}>
						<CleanTextInput
							style={styles.textInput}
							value={password}
							secureTextEntry
							placeholder='Senha'
							onChangeText={text => setPassword(text)}
						/>
					</View>
					<View style={[styles.elementContainer, { marginBottom: 40 }]}>
						<PrimaryButton
							style={{ width: '50%' }}
							title='Fazer Login'
							isLoading={isLoading}
							onPress={validate}
						/>
					</View>
					<View style={[styles.elementContainer, { marginBottom: 60 }]}>
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
		backgroundColor: COLORS.primary400
	},
	foreground: {
		minHeight: 200,
		marginVertical: '15%'
	},
	userIconContainer: {
		backgroundColor: '#fff',
		borderRadius: 1000,
		height: 170,
		width: 170,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	userIcon: {},
	loginCard: {
		backgroundColor: '#fff',
		width: '100%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingBottom: 40,
		paddingTop: 60,
		overflow: 'hidden',
		alignItems: 'center'
	},
	title: {
		color: COLORS.primary500,
		fontSize: 60,
		fontWeight: '600'
	},
	forgotPassword: {
		fontSize: 14
	},
	textInput: {
		fontSize: 16,
		width: 240
	},
	elementContainer: {
		width: '100%',
		alignItems: 'center'
	},
	logoContainer: {
		width: '60%',
		maxHeight: 100
	},
	logo: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	}
})

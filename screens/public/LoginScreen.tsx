import { useContext, useState } from 'react'
import { ScrollView, View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { CleanTextButton } from '../../components/ui/buttons/CleanTextButton'
import { PrimaryButton } from '../../components/ui/PrimaryButton'
import { CleanTextInput } from '../../components/ui/textInputs/CleanTextInput'
import { COLORS } from '../../constants/colors'
import { AuthContext } from '../../store/AuthContext'
import { fakeSendData } from '../../utils/fakeFunctions'

export function LoginScreen() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
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

	return (
		<SafeAreaView style={styles.root} edges={['top', 'left', 'right']}>
			<ScrollView
				keyboardShouldPersistTaps='always'
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-end',
					alignItems: 'center'
				}}
				alwaysBounceVertical={false}
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
							title='Esqueci minha senha'
							onPress={() => {}}
						/>
					</View>
					<View style={[styles.elementContainer]}>
						<View style={styles.logoContainer}>
							<Image style={styles.logo} source={require('../../assets/CabroboLogo.png')} />
						</View>
					</View>
				</View>
			</ScrollView>
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

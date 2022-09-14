import { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Modal,
	ScrollView,
	Pressable,
	Linking,
	Dimensions,
} from 'react-native'
import Checkbox from 'expo-checkbox'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Ionicons } from '@expo/vector-icons'
import { privacyPolicyText } from './privacyPolicyText'
import { COLORS } from '../../constants/colors'
import { PrimaryButton } from '../ui/PrimaryButton'
import { CleanTextButton } from '../ui/buttons/CleanTextButton'

interface PrivacPolicyModalProps {
	confirm: boolean
	visible: boolean
	onConfirm: () => void
	onCancel: () => void
}

export function PrivacyPolicyModal(props: PrivacPolicyModalProps) {
	const [checked, setChecked] = useState(false)
	const [checked2, setChecked2] = useState(false)
	return (
		<Modal visible={props.visible} transparent>
			<SafeAreaView style={styles.modalContainer} edges={['top', 'left', 'right']}>
				<View style={styles.modalCardShadow}>
					<View style={styles.modalCard}>
						<ScrollView
							showsVerticalScrollIndicator
							contentContainerStyle={{
								justifyContent: 'flex-start',
								paddingTop: '5%',
								alignItems: 'center',
								maxWidth: '100%',
								padding: 15,
							}}
							alwaysBounceVertical={false}
						>
							<Text style={styles.title}>Política de Privacidade</Text>
							<Text style={styles.description}>
								Leia nossa política de privacidade com atenção. Role para baixo, para visualizá-la
								completamente.
							</Text>
							<View style={styles.textContainer}>
								<Text style={styles.privacyText}>{privacyPolicyText}</Text>
							</View>
							{props.confirm && (
								<View style={{ width: '100%', alignItems: 'flex-start' }}>
									<Pressable
										onPress={() => setChecked2(!checked2)}
										style={styles.checkboxContainer}
									>
										<Checkbox
											style={styles.checkbox}
											value={checked2}
											onValueChange={() => setChecked2(!checked2)}
										/>
										<Text style={styles.checkboxText}>
											Entendo que meus dados de localização não serão compartilhados com terceiros
										</Text>
									</Pressable>
									<Pressable onPress={() => setChecked(!checked)} style={styles.checkboxContainer}>
										<Checkbox
											style={styles.checkbox}
											value={checked}
											onValueChange={() => setChecked(!checked)}
										/>
										<Text style={styles.checkboxText}>
											Li e concordo com a Política de Privacidade
										</Text>
									</Pressable>
								</View>
							)}
							<View style={{ marginBottom: 10 }}>
								<CleanTextButton
									title='Ver política de privacidade na web'
									textStyle={{ padding: 10 }}
									onPress={() => Linking.openURL('https://www.iubenda.com/privacy-policy/40648653')}
								/>
							</View>
							<View>
								<PrimaryButton
									locked={(!checked || !checked2) && props.confirm}
									title={props.confirm ? 'Confirmar' : 'Voltar'}
									onPress={props.onConfirm}
								/>
							</View>
						</ScrollView>
					</View>
				</View>
			</SafeAreaView>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#00000070',
	},
	modalCardShadow: {
		borderRadius: 16,
		marginTop: 20,
		maxWidth: '90%',
		backgroundColor: 'transparent',
		shadowColor: '#000',
		justifyContent: 'center',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	modalCard: {
		backgroundColor: '#fff',
		overflow: 'hidden',
		borderRadius: 16,
		minHeight: 300,
		height: Dimensions.get('screen').height * 0.6,
		maxHeight: 600,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	title: {
		fontSize: 25,
		color: COLORS.primary500,
		fontWeight: '600',
		marginBottom: 19,
	},
	description: {
		fontSize: 14,
		fontWeight: '500',
		textAlign: 'center',
		color: COLORS.secondary500,
		marginBottom: 20,
	},
	textContainer: {
		borderWidth: 2,
		overflow: 'hidden',
		borderColor: COLORS.secondary500,
		padding: 14,
		marginBottom: 15,
	},
	privacyText: {
		fontWeight: '500',
		fontSize: 12,
		fontStyle: 'italic',
	},
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
		padding: 10,
	},
	checkbox: {
		borderRadius: 4,
		borderColor: COLORS.secondary500,
		borderWidth: 3,
		height: 24,
		width: 24,
		marginRight: 5,
	},
	checkboxText: {
		fontSize: 12,
		fontWeight: '600',
		color: COLORS.secondary500,
	},
})

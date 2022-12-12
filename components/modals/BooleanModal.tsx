import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, ScrollView, Pressable, Linking } from 'react-native'
import Checkbox from 'expo-checkbox'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Ionicons } from '@expo/vector-icons'
import { privacyPolicyText } from './privacyPolicyText'
import { COLORS } from '../../constants/colors'
import { PrimaryButton } from '../ui/PrimaryButton'
import { CleanTextButton } from '../ui/buttons/CleanTextButton'

interface BooleanModalProps {
	visible: boolean
	onContinue: () => void
	onCancel: () => void
	title: string
	message: string
	continueButtonTitle: string
	cancelbuttonTitle: string
}

export function BooleanModal(props: BooleanModalProps) {
	return (
		<Modal visible={props.visible} transparent>
			<SafeAreaView style={styles.modalContainer} edges={['top', 'left', 'right']}>
				<View style={styles.modalCardShadow}>
					<View style={styles.modalCard}>
						<Text style={styles.title}>{props.title}</Text>
						<Text style={styles.description}>{props.message}</Text>
						<View style={styles.buttonsContainer}>
							<PrimaryButton
								title={props.cancelbuttonTitle}
								onPress={props.onContinue}
								style={{ backgroundColor: COLORS.secondary500, width: 140, marginRight: 5 }}
							/>
							<PrimaryButton
								title={props.continueButtonTitle}
								onPress={props.onContinue}
								style={{ width: 140, marginLeft: 5 }}
							/>
						</View>
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
		maxWidth: '80%',
		backgroundColor: 'transparent',
		shadowColor: '#000',
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
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 20,
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
		color: COLORS.primary500,
		marginBottom: 20,
	},
	protocol: {
		fontSize: 20,
		fontWeight: '600',
		color: COLORS.primary500,
		marginBottom: 20,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
})

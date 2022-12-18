import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, ScrollView, Pressable, Linking } from 'react-native'
import Checkbox from 'expo-checkbox'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { privacyPolicyText } from './privacyPolicyText'
import { COLORS } from '../../constants/colors'
import { PrimaryButton } from '../ui/PrimaryButton'
import { CleanTextButton } from '../ui/buttons/CleanTextButton'
import { Coords } from '../../types/global'
import { HTMLMap } from '../HTMLMap'

interface MapModalProps {
	visible: boolean
	onContinue: () => void
	onClose: () => void
	title: string
	message: string
	buttonTitle: string
	initialCoords?: Coords
	telefone?: string
	categoria?: string
	endereco?: string
	estabelecimento?: boolean
}

export function MapModal(props: MapModalProps) {
	return (
		<Modal visible={props.visible} transparent>
			<SafeAreaView style={styles.modalContainer} edges={['top', 'left', 'right']}>
				<View style={styles.modalCardShadow}>
					<View style={styles.modalCard}>
						<View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
							<View style={{ marginRight: 5, opacity: 0 }}>
								<Ionicons name='close' size={30} />
							</View>
							<Text style={styles.title}>{props.title}</Text>
							<Pressable style={{ marginLeft: 5 }} onPress={props.onClose}>
								<Ionicons name='close' size={30} />
							</Pressable>
						</View>
						{props.estabelecimento && (
							<>
								<View style={{ flexDirection: 'row', width: '100%' }}>
									<Text style={[styles.detalhes, { fontWeight: '700' }]}>Categoria: </Text>
									<Text style={styles.detalhes}>{props.categoria || 'Não informado'}</Text>
								</View>
								<View style={{ flexDirection: 'row', width: '100%' }}>
									<Text style={[styles.detalhes, { fontWeight: '700' }]}>Telefone: </Text>
									<Text style={styles.detalhes}>{props.telefone || 'Não informado'}</Text>
								</View>
								<View style={{ flexDirection: 'row', width: '100%' }}>
									<Text style={[styles.detalhes, { fontWeight: '700' }]}>Endereço: </Text>
									<Text style={[styles.detalhes, { flex: 1 }]}>
										{props.endereco || 'Não informado'}
									</Text>
								</View>
							</>
						)}

						<Text style={styles.description}>{props.message}</Text>
						<View style={{ width: '100%', maxHeight: 300, marginBottom: 10 }}>
							<HTMLMap initialCoords={props.initialCoords} avoidChangeCoords />
						</View>
						<View style={{ marginBottom: 0, paddingVertical: 5 }}>
							<PrimaryButton title={props.buttonTitle} onPress={props.onContinue} />
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
		width: 500,
		maxWidth: '90%',
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
		padding: 10,
	},

	title: {
		fontSize: 20,
		textAlign: 'center',
		color: COLORS.primary500,
		fontWeight: '600',
		marginBottom: 19,
	},
	description: {
		fontSize: 14,
		fontWeight: '600',
		textAlign: 'center',
		color: COLORS.primary500,
		marginVertical: 10,
	},
	protocol: {
		fontSize: 20,
		fontWeight: '600',
		color: COLORS.primary500,
		marginBottom: 20,
	},
	detalhes: {
		fontSize: 14,
		fontWeight: '500',
		color: COLORS.primary500,
		marginBottom: 5,
	},
})

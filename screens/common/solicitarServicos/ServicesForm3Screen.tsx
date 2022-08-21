import React, { useState } from 'react'
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	Pressable
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons'

import { FormStepsBar } from '../../../components/form/FormStepsBar'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { COLORS } from '../../../constants/colors'
import { allMinorServicesForm } from '../../../data/minorServiceForm'

interface FormData {
	[key: string]: any
}

export function ServicesForm3Screen() {
	const formPage = allMinorServicesForm[0].pages[2]
	const navigation = useNavigation()
	const [formData, setFormData] = useState<FormData>({})

	const [image, setImage] = useState<string | null>(null)

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1
		})

		if (!result.cancelled) {
			setImage(result.uri)
		}
	}

	return (
		<ScrollView
			keyboardShouldPersistTaps='always'
			contentContainerStyle={{
				flexGrow: 1,
				justifyContent: 'flex-start',
				alignItems: 'center',
				paddingBottom: 20
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
											onChangeText={text => setFormData({ ...formData, [field.alias]: text })}
											value={formData[field.alias] || ''}
										/>
									) : field.type === 'textArea' ? (
										<TextInput
											style={[styles.textInput, { height: 70 }]}
											multiline
											numberOfLines={4}
											placeholder='Digite aqui...'
											onChangeText={text => setFormData({ ...formData, [field.alias]: text })}
											value={formData[field.alias] || ''}
										/>
									) : field.type === 'radioButton' ? (
										<Pressable
											style={styles.radioButtonContainer}
											onPress={() =>
												setFormData({
													...formData,
													[field.alias]: !formData[field.alias]
												})
											}
										>
											<View
												style={[
													styles.radioButton,
													formData[field.alias] && { backgroundColor: COLORS.primary500 }
												]}
											/>
											<Text style={styles.fieldLabel}>{field.label}</Text>
										</Pressable>
									) : field.type === 'file' ? (
										<View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
											<Pressable style={{ alignItems: 'center' }} onPress={pickImage}>
												<Ionicons name='camera' color={COLORS.primary500} size={60} />
												<Text style={{ color: COLORS.primary500 }}>
													Toque para anexar uma imagem
												</Text>
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
			<View style={styles.buttonContainer}>
				<PrimaryButton
					title='Enviar Formulário'
					onPress={() => navigation.navigate('SolicitarServicosForm3' as never)}
				/>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	pageTitle: {
		fontSize: 18,
		color: COLORS.primary500,
		opacity: 0.5,
		fontWeight: '500',
		marginVertical: 10
	},
	section: {
		width: '100%',
		marginBottom: 20
	},
	sectionTitle: {
		fontSize: 16,
		paddingHorizontal: '7%',
		fontWeight: '500',
		color: COLORS.primary500,
		marginBottom: 20
	},
	field: {
		width: '100%',
		paddingHorizontal: '7%',
		marginBottom: 10
	},
	fieldLabel: {
		fontWeight: '500',
		fontSize: 14,
		opacity: 1,
		color: COLORS.primary500
	},
	textInput: {
		textAlignVertical: 'top',
		borderColor: COLORS.primary500,
		borderRadius: 14,
		borderWidth: 2,
		fontSize: 14,
		paddingHorizontal: 15,
		paddingVertical: 8,
		color: COLORS.primary400
	},
	buttonContainer: {
		padding: 20
	},
	radioButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	radioButton: {
		backgroundColor: '#fff',
		height: 20,
		width: 20,
		borderRadius: 100,
		marginRight: 10,
		borderColor: COLORS.primary500,
		borderWidth: 1
	}
})

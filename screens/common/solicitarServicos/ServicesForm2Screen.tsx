import React, { useContext, useLayoutEffect, useState } from 'react'
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FormStepsBar } from '../../../components/form/FormStepsBar'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { COLORS } from '../../../constants/colors'
import { allMinorServicesForm, FormPage } from '../../../data/minorServiceForm'
import { SolicitarServicoFormContext } from '../../../store/SolicitarServicosContext'
import { allMinorServices } from '../../../data/minorServices'

interface FormData {
	[key: string]: any
}

export function ServicesForm2Screen() {
	const [formPage, setFormPage] = useState<FormPage | null>()
	const navigation = useNavigation()
	const ServicesCtx = useContext(SolicitarServicoFormContext)
	const [isMissing, setIsMissing] = useState(true)

	const mService = allMinorServices.filter(
		minService => minService.id === ServicesCtx.minorServiceId
	)[0]

	useLayoutEffect(() => {
		navigation.setOptions({
			title: mService.title
		})
		setFormPage(
			allMinorServicesForm.filter(
				minSrvForm => minSrvForm.minorServiceId === ServicesCtx.minorServiceId
			)[0].pages[1]
		)
	}, [])

	if (!formPage) {
		return (
			<View>
				<Text>aaa</Text>
			</View>
		)
	}

	function checkIfFieldsAreFilled() {
		if (
			ServicesCtx?.data['logradouro']?.trim() &&
			ServicesCtx?.data['bairro']?.trim() &&
			ServicesCtx?.data['numero']?.trim() &&
			ServicesCtx?.data['pontoDeReferencia']?.trim()
		) {
			return true
		}
		return false
	}

	return (
		<ScrollView
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
				<FormStepsBar maxSteps={3} currentStep={2} />
				<Text style={styles.pageTitle}>{formPage.title}</Text>
			</View>
			{formPage.sections.map((section, key1) => {
				return (
					<View style={styles.section} key={key1}>
						<Text style={styles.sectionTitle}>{section.title}</Text>
						{section.fields.map((field, key2) => {
							return (
								<View style={styles.field} key={key2}>
									<Text style={styles.fieldLabel}>{field.label}</Text>
									{field.type === 'textInput' ? (
										<TextInput
											style={styles.textInput}
											placeholder='Digite aqui...'
											onChangeText={text => {
												ServicesCtx.updateData(field.alias, text)
											}}
											value={ServicesCtx.data[field.alias] || ''}
										/>
									) : field.type === 'textArea' ? (
										<TextInput
											style={styles.textInput}
											multiline
											numberOfLines={4}
											placeholder='Digite aqui...'
											value={field.value as string}
										/>
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
					title='Continuar'
					onPress={() => {
						if (checkIfFieldsAreFilled()) {
							navigation.navigate('SolicitarServicosForm3' as never)
						}
					}}
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
		width: '100%'
	},
	sectionTitle: {},
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
		borderColor: COLORS.primary500,
		borderRadius: 14,
		borderWidth: 2,
		fontSize: 14,
		paddingHorizontal: 15,
		paddingVertical: 8,
		color: COLORS.primary400
	},
	buttonContainer: {
		marginVertical: 20
	}
})

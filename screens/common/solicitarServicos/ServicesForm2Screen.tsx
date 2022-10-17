import React, { useContext, useLayoutEffect, useState } from 'react'
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FormStepsBar } from '../../../components/form/FormStepsBar'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { COLORS } from '../../../constants/colors'
import { allMinorServicesForm, FormPage } from '../../../data/minorServiceForm'
import { useServiceRequestForm } from '../../../store/SolicitarServicosContext'
import { allMinorServices } from '../../../data/minorServices'
import Header from '../../../components/common/Header'
import { RoutesType } from '../../../types/routes'
import FirstMinorService1Form from '../../../components/form/MinorService1Form'
import FirstMinorService2Form from '../../../components/form/MinorService2Form'

interface FormData {
	[key: string]: any
}

export function ServicesForm2Screen() {
	const [formPage, setFormPage] = useState<FormPage | null>()
	const navigation = useNavigation()
	const { minorServiceId, data, updateData } = useServiceRequestForm()
	const [error, setError] = useState(false)
	const [isMissing, setIsMissing] = useState(true)

	const mService = allMinorServices.filter(minService => minService.id === minorServiceId)[0]

	useLayoutEffect(() => {
		navigation.setOptions({
			title: mService.title,
		})
		setFormPage(
			allMinorServicesForm.filter(minSrvForm => minSrvForm.minorServiceId === minorServiceId)[0]
				.pages[1],
		)
	}, [])

	if (!formPage) {
		return (
			<View>
				<Text>aaa</Text>
			</View>
		)
	}

	return (
		<>
			<Header goBack title={mService.title} />
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
					<FormStepsBar maxSteps={3} currentStep={2} />
					<Text style={styles.pageTitle}>{formPage.title}</Text>
				</View>
				{minorServiceId <= 3 ? <FirstMinorService1Form /> : <FirstMinorService2Form />}
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

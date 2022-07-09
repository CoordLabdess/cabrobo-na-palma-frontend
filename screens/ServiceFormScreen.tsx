import { useLayoutEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { RouteProp, ServiceForm } from '../types/global'
import { HTMLMap } from '../components/HTMLMap'
import { allServiceForms } from '../data/serviceForms'
import { COLORS } from '../constants/colors'
import { PrimaryButton } from '../components/ui/PrimaryButton'

interface ServiceScreenProps {
	route: RouteProp
}

export function ServiceFormScreen(props: ServiceScreenProps) {
	const navigation = useNavigation()
	const [serviceId, setServiceId] = useState(-1)
	const [serviceTitle, setServiceTitle] = useState('')
	const [serviceType, setServiceType] = useState('')
	const [serviceForm, setServiceForm] = useState<ServiceForm>()
	const [currentStep, setCurrentStep] = useState(1)
	const [maxSteps, setMaxSteps] = useState(0)
	useLayoutEffect(() => {
		setServiceId(props.route.params?.serviceId)
		setServiceTitle(props.route.params?.serviceTitle)
		setServiceType(props.route.params?.serviceType)
		setCurrentStep(props.route.params?.step)
	}, [])

	useLayoutEffect(() => {
		navigation.setOptions({
			title: serviceTitle
		})
		setServiceForm(
			allServiceForms.filter(currentServiceForm => {
				return currentServiceForm.id === serviceId
			})[0]
		)
	}, [serviceTitle, serviceId])

	useLayoutEffect(() => {
		if (serviceForm) {
			setMaxSteps(serviceForm.pages.length + 1)
		}
	}, [serviceForm])

	function updateCurrentStep() {
		if (currentStep < maxSteps) {
			setCurrentStep(cStep => cStep + 1)
		}
	}

	return (
		<LinearGradient style={styles.formContainer} colors={['#fff', '#123A562E']}>
			<Text style={styles.titleText}>Pesquise pelo nome da rua onde há o problema</Text>
			<View style={styles.formFieldsContainer}>
				{currentStep === 1 ? <HTMLMap /> : <Text>oi</Text>}
			</View>
			<View style={styles.formControlContainer}>
				<PrimaryButton
					title='Continuar'
					style={{ width: 200 }}
					onPress={() => {
						updateCurrentStep()
					}}
				/>
				<Text>
					{currentStep} de {maxSteps}
				</Text>
			</View>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	formContainer: {
		width: '100%',
		height: '100%',
		justifyContent: 'space-between'
	},
	titleText: {
		padding: 20,
		fontSize: 16,
		color: COLORS.secondary500,
		width: '100%',
		textAlign: 'center'
	},
	formFieldsContainer: {
		flex: 1
	},
	formControlContainer: {
		alignItems: 'center',
		paddingVertical: 40
	}
})

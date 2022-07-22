import { useLayoutEffect, useState } from 'react'
import {
	View,
	Text,
	Button,
	StyleSheet,
	Platform,
	KeyboardAvoidingView,
	ScrollView,
	Dimensions
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { RouteProp, ServiceForm } from '../types/global'
import { HTMLMap } from '../components/HTMLMap'
import { allServiceForms } from '../data/serviceForms'
import { COLORS } from '../constants/colors'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { FormStepsBar } from '../components/form/FormStepsBar'
import { FormParser } from '../components/form/FormParser'

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
			<View style={{ backgroundColor: 'red', flex: 1, overflow: 'hidden' }}>
				<ScrollView style={{ flexGrow: 1 }} scrollEnabled={true}>
					<Text style={styles.titleText}>Pesquise pelo nome da rua onde há o problema</Text>
					<View style={styles.formFieldsContainer}>
						{currentStep === 1 ? (
							<HTMLMap />
						) : (
							<FormParser
								currentStep={currentStep}
								page={serviceForm?.pages.filter((page, key) => key + 1 === currentStep)[0]}
							/>
						)}
					</View>
					<View style={styles.formControlContainer}>
						<PrimaryButton
							title='Continuar'
							style={{ width: 200, marginBottom: 20 }}
							onPress={() => {
								updateCurrentStep()
							}}
						/>
						<FormStepsBar style={{ width: '80%' }} currentStep={currentStep} maxSteps={maxSteps} />
					</View>
				</ScrollView>
			</View>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	formContainer: {
		flex: 1
	},
	titleText: {
		paddingVertical: 20,
		paddingHorizontal: 50,
		fontSize: 18,
		color: COLORS.secondary500,
		width: '100%',
		textAlign: 'center'
	},
	formFieldsContainer: {
		height: '70%'
	},
	formControlContainer: {
		alignItems: 'center',
		paddingVertical: 30
	}
})

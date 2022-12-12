import React from 'react'
import { Formik } from 'formik'
import { Button, Center, Column } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from '../common/TextInput'
import { useServiceRequestForm } from '../../store/SolicitarServicosContext'
import { allMinorServicesForm } from '../../data/minorServiceForm'
import { MinorService2FormSchema } from '../../utils/formValidators'

export default function FirstMinorService2Form() {
	const navigation = useNavigation()
	const { data, updateForm } = useServiceRequestForm()

	const questions = allMinorServicesForm[5].pages[1].sections[0].fields

	type aliases = 'logradouro' | 'bairro' | 'cep' | 'numero' | 'pontoDeReferencia' | 'complemento'
	return (
		<Formik
			enableReinitialize
			validateOnChange
			validationSchema={MinorService2FormSchema}
			onSubmit={values => {
				updateForm(values)
				navigation.navigate('SolicitarServicosForm3')
			}}
			initialValues={{
				logradouro: data['logradouro'] || '',
				bairro: data['bairro'] || '',
				cep: data['cep'] || '',
				numero: data['numero'] || '',
				complemento: data['complemento'] || '',
				pontoDeReferencia: data['pontoDeReferencia'] || '',
			}}
		>
			{({ values, errors, handleSubmit, setFieldValue }) => {
				return (
					<Column w='80%' space={4}>
						{questions.map(({ label, alias }) => (
							<TextInput
								editable={
									alias !== 'logradouro' &&
									alias !== 'bairro' &&
									alias !== 'cep' &&
									alias !== 'numero'
								}
								title={label}
								handleChange={(text: string) => setFieldValue(alias, text)}
								value={values[`${alias}` as aliases]}
								errorMessage={errors[`${alias}` as aliases] as string}
								numeric={alias === 'numero'}
								key={alias}
							/>
						))}
						<Center>
							<Button
								mt={8}
								bgColor='#123A56'
								py={2}
								onPress={() => handleSubmit()}
								px={12}
								borderRadius='3xl'
								_text={{
									fontSize: 'lg',
								}}
							>
								Continuar
							</Button>
						</Center>
					</Column>
				)
			}}
		</Formik>
	)
}

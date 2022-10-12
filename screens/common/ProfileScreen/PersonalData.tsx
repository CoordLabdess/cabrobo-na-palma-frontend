import React from 'react'
import {
	Text,
	VStack,
	HStack,
	Center,
	ScrollView,
	Avatar,
	Column,
	Button,
	Heading,
} from 'native-base'
import { Formik } from 'formik'
import MenuListItem from '../../../components/MenuScreen/MenuListItem'
import Header from '../../../components/common/Header'
import { TextInput } from '../../../components/common/TextInput'

const questions = [
	{
		label: 'CPF',
		alias: 'cpf',
	},
	{
		label: 'Nome completo',
		alias: 'name',
	},
	{
		label: 'Celular',
		alias: 'phone',
	},
	{
		label: 'E-mail',
		alias: 'email',
	},
	{
		label: 'Senha',
		alias: 'password',
	},
]

export function PersonalData() {
	return (
		<>
			<Header goBack title='Dados Pessoais' />
			<ScrollView showsVerticalScrollIndicator={false} flex={1} my={10}>
				<Center flex={1}>
					<Heading mb={10} fontSize='4xl'>
						Dados Pessoais
					</Heading>
					<Formik
						enableReinitialize
						validateOnChange
						// validationSchema={MinorService1FormSchema}
						onSubmit={values => {
							console.log(values)
						}}
						initialValues={{
							cpf: '',
							name: '',
							phone: '',
							mail: '',
							password: '',
						}}
					>
						{({ values, errors, handleSubmit, setFieldValue }) => {
							return (
								<Column w='80%' space={4}>
									<TextInput
										title={'CPF'}
										handleChange={(text: string) => setFieldValue('cpf', text)}
										value={values['cpf']}
										errorMessage={errors['cpf']}
										numeric
									/>
									<TextInput
										title={'Nome completo'}
										handleChange={(text: string) => setFieldValue('name', text)}
										value={values['name']}
										errorMessage={errors['name']}
									/>
									<TextInput
										title={'Celular'}
										handleChange={(text: string) => setFieldValue('phone', text)}
										value={values['phone']}
										errorMessage={errors['phone']}
										numeric
									/>
									<TextInput
										title={'E-mail'}
										handleChange={(text: string) => setFieldValue('mail', text)}
										value={values['mail']}
										errorMessage={errors['mail']}
									/>
									<TextInput
										title={'Senha (no mínimo 6 caracteres)'}
										handleChange={(text: string) => setFieldValue('password', text)}
										value={values['password']}
										errorMessage={errors['password']}
									/>
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
											Salvar
										</Button>
									</Center>
								</Column>
							)
						}}
					</Formik>
				</Center>
			</ScrollView>
		</>
	)
}

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Center, Column, Heading, ScrollView } from 'native-base'
import { Formik } from 'formik'
import { useAuth } from '../../store/AuthContext'
import Header from '../../components/common/Header'
import { TextInput } from '../../components/common/TextInput'
import { removerCaracteresEspeciais } from '../../utils/validaçõesString'

export default function SignUpScreen() {
	const { signed, signup, loading } = useAuth()
	const navigation = useNavigation()

	useEffect(() => {
		if (signed === 1) {
			navigation.navigate('Root')
		}
	}, [signed])

	return (
		<>
			<Header goBack title='Cadastro' />
			<ScrollView showsVerticalScrollIndicator={false} flex={1} my={10}>
				<Center flex={1}>
					<Formik
						enableReinitialize
						validateOnChange
						// validationSchema={MinorService1FormSchema}
						onSubmit={values => {
							signup(values)
						}}
						initialValues={{
							name: '',
							mail: '',
							cpf: '',
							phone: '',
							password: '',
							confirmPassword: '',
						}}
					>
						{({ values, errors, handleSubmit, setFieldValue }) => {
							function writeCPF(text: string) {
								const s = removerCaracteresEspeciais(text).split('')
								if (s.length <= 11) {
									setFieldValue(
										'cpf',
										s
											.map((b, i) => {
												if (i === 9) {
													return `-${b}`
												} else if (i === 3 || i === 6) {
													return `.${b}`
												} else {
													return b
												}
											})
											.join(''),
									)
								}
							}

							function writePhone(text: string) {
								const s = removerCaracteresEspeciais(text).split('')
								if (s.length <= 11) {
									setFieldValue(
										'phone',
										s
											.map((b, i) => {
												if (i === 0) {
													return `(${b}`
												} else if (i === 1) {
													return `${b})`
												} else if (i === 6) {
													return `${b}-`
												} else {
													return b
												}
											})
											.join(''),
									)
								}
							}
							return (
								<Column w='80%' space={4}>
									<TextInput
										title={'Nome completo'}
										handleChange={(text: string) => setFieldValue('name', text)}
										value={values['name']}
										errorMessage={errors['name']}
									/>
									<TextInput
										title={'E-mail'}
										handleChange={(text: string) => setFieldValue('mail', text)}
										value={values['mail']}
										errorMessage={errors['mail']}
									/>
									<TextInput
										title={'CPF'}
										handleChange={(text: string) => writeCPF(text)}
										value={values['cpf']}
										errorMessage={errors['cpf']}
										numeric
										maxLength={11}
									/>
									<TextInput
										title={'Celular'}
										handleChange={(text: string) => writePhone(text)}
										value={values['phone']}
										errorMessage={errors['phone']}
										numeric
										maxLength={11}
									/>
									<TextInput
										title={'Senha'}
										handleChange={(text: string) => setFieldValue('password', text)}
										value={values['password']}
										errorMessage={errors['password']}
									/>
									<TextInput
										title={'Confirmar senha'}
										handleChange={(text: string) => setFieldValue('confirmPassword', text)}
										value={values['confirmPassword']}
										errorMessage={errors['confirmPassword']}
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
											isLoading={loading}
										>
											Cadastrar
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

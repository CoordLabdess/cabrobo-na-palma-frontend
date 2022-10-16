import * as Yup from 'yup'

// function validators
const isValidState = (state: any) => {
	if (state === undefined) return false
	if (
		state === 'AC' ||
		state === 'AL' ||
		state === 'AP' ||
		state === 'AM' ||
		state === 'BA' ||
		state === 'CE' ||
		state === 'DF' ||
		state === 'ES' ||
		state === 'GO' ||
		state === 'MA' ||
		state === 'MT' ||
		state === 'MS' ||
		state === 'MG' ||
		state === 'PA' ||
		state === 'PB' ||
		state === 'PR' ||
		state === 'PE' ||
		state === 'PI' ||
		state === 'RJ' ||
		state === 'RN' ||
		state === 'RS' ||
		state === 'RO' ||
		state === 'RR' ||
		state === 'SC' ||
		state === 'SP' ||
		state === 'SE' ||
		state === 'TO' ||
		state === 'Ac' ||
		state === 'Al' ||
		state === 'Ap' ||
		state === 'Am' ||
		state === 'Ba' ||
		state === 'Ce' ||
		state === 'Df' ||
		state === 'Es' ||
		state === 'Go' ||
		state === 'Ma' ||
		state === 'Mt' ||
		state === 'Ms' ||
		state === 'Mg' ||
		state === 'Pa' ||
		state === 'Pb' ||
		state === 'Pr' ||
		state === 'Pe' ||
		state === 'Pi' ||
		state === 'Rj' ||
		state === 'Rn' ||
		state === 'Rs' ||
		state === 'Ro' ||
		state === 'Rr' ||
		state === 'Sc' ||
		state === 'Sp' ||
		state === 'Se' ||
		state === 'To' ||
		state === 'ac' ||
		state === 'al' ||
		state === 'ap' ||
		state === 'am' ||
		state === 'ba' ||
		state === 'ce' ||
		state === 'df' ||
		state === 'es' ||
		state === 'go' ||
		state === 'ma' ||
		state === 'mt' ||
		state === 'ms' ||
		state === 'mg' ||
		state === 'pa' ||
		state === 'pb' ||
		state === 'pr' ||
		state === 'pe' ||
		state === 'pi' ||
		state === 'rj' ||
		state === 'rn' ||
		state === 'rs' ||
		state === 'ro' ||
		state === 'rr' ||
		state === 'sc' ||
		state === 'sp' ||
		state === 'se' ||
		state === 'to'
	)
		return true
	return false
}

// Yup validators

export const MinorService1FormSchema = Yup.object().shape({
	logradouro: Yup.string().required('Necessário'),
	bairro: Yup.string().required('Necessário'),
	numero: Yup.number().required('Necessário'),
	complemento: Yup.string(),
	pontoDeReferencia: Yup.string().required('Necessário'),
	numeroDoPoste: Yup.string(),
})
export const loginSchema = Yup.object().shape({
	cpf: Yup.string()
		.required('Necessário')
		.min(14, 'Digite um CPF válido')
		.max(14, 'Digite um CPF válido'),
	password: Yup.string().required('Necessário').min(6, 'Mínimo 6 caracteres'),
})
export const MinorService2FormSchema = Yup.object().shape({
	logradouro: Yup.string().required('Necessário'),
	bairro: Yup.string().required('Necessário'),
	numero: Yup.number().required('Necessário'),
	complemento: Yup.string(),
	pontoDeReferencia: Yup.string().required('Necessário'),
})

export const SignupValidationSchema = Yup.object().shape({
	name: Yup.string().required('Necessário'),
	mail: Yup.string().email().required('Necessário'),
	cpf: Yup.string().required('Necessário'),
	phone: Yup.string().required('Necessário'),
	password: Yup.string().required('Necessário'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), 'Senhas não são iguais'])
		.required('Confirmação de senha é necessária'),
})

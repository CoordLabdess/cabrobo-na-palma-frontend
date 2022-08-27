import { TextInput, StyleSheet, KeyboardTypeOptions, TextStyle } from 'react-native'
import { COLORS } from '../../../constants/colors'

interface CleanTextInputProps {
	value?: string
	onChangeText?: (value: string) => void
	placeholder?: string
	keyboardType?: KeyboardTypeOptions
	secureTextEntry?: boolean
	style?: TextStyle
}

export function CleanTextInput(props: CleanTextInputProps) {
	return (
		<TextInput
			secureTextEntry={props.secureTextEntry}
			keyboardType={props.keyboardType}
			placeholder={props.placeholder}
			style={[styles.textInput, props.style]}
			value={props.value}
			onChangeText={props.onChangeText}
		/>
	)
}

const styles = StyleSheet.create({
	textInput: {
		borderBottomWidth: 1,
		width: 200,
		fontSize: 14,
		paddingHorizontal: 10,
		borderColor: '#313131'
	}
})

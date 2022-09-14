import {
	TextInput,
	StyleSheet,
	KeyboardTypeOptions,
	TextStyle,
	ReturnKeyTypeOptions,
} from 'react-native'
import { COLORS } from '../../../constants/colors'

interface CleanTextInputProps {
	autoFocus?: boolean
	editable?: boolean
	maxLength?: number
	value?: string
	onChangeText?: (value: string) => void
	placeholder?: string
	keyboardType?: KeyboardTypeOptions
	returnKeyType?: ReturnKeyTypeOptions
	returnKeyLabel?: string
	secureTextEntry?: boolean
	onSubmit?: () => void
	style?: TextStyle
}

export function CleanTextInput(props: CleanTextInputProps) {
	return (
		<TextInput
			maxLength={props.maxLength}
			autoFocus={props.autoFocus}
			editable={props.editable}
			onSubmitEditing={props.onSubmit}
			returnKeyLabel={props.returnKeyLabel}
			returnKeyType={props.returnKeyType}
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
		paddingBottom: 5,
		paddingTop: 25,
		paddingHorizontal: 10,
		borderColor: '#313131',
	},
})

import { View, Text } from 'react-native'

interface FormParserProps {
	formId: number
	currentStep: number
}

export function FormParser(props: FormParserProps) {
	return (
		<View>
			<Text>{props.currentStep}</Text>
		</View>
	)
}

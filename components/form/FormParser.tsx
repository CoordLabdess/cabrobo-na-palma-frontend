import { View, Text, TextInput, StyleSheet } from 'react-native'
import { FormPage, FormElement } from '../../types/global'
import { COLORS } from '../../constants/colors'

interface FormParserProps {
	page?: FormPage
	currentStep: number
}

function Element(props: { element: FormElement }) {
	if (props.element.type === 'TextInput') {
		return <TextInput style={styles.textInput} placeholder={props.element.placeHolder} />
	}
	return <Text>eeeee</Text>
}

export function FormParser(props: FormParserProps) {
	return (
		<View>
			<Text>{props.currentStep}</Text>
			{props.page?.sections.map((section, key) => {
				return (
					<View key={key}>
						<Text>{section.title}</Text>
						{section.elements.map(element => {
							return (
								<View style={{ width: '100%', alignItems: 'center' }} key={element.id}>
									<Element element={element} />
								</View>
							)
						})}
					</View>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	textInput: {
		borderColor: COLORS.primary500,
		borderWidth: 2,
		padding: 5,
		width: '80%',
		borderRadius: 10,
		color: COLORS.primary500
	}
})

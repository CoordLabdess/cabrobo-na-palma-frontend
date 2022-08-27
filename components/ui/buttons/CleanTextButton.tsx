import { Pressable, Text, TextStyle, StyleSheet } from 'react-native'
import { COLORS } from '../../../constants/colors'

interface CleanTextButtonProps {
	title: string
	onPress: () => void
	textStyle?: TextStyle
}

export function CleanTextButton(props: CleanTextButtonProps) {
	return (
		<Pressable>
			<Text style={[styles.text, props.textStyle]}>{props.title}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 12,
		fontWeight: '400',
		color: COLORS.primary500
	}
})

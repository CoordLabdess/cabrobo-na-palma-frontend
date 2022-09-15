import {
	View,
	Text,
	ActivityIndicator,
	Platform,
	StyleProp,
	TextStyle,
	StyleSheet,
} from 'react-native'
import { COLORS } from '../../../constants/colors'

interface SimpleLoadingIndicatorProps {
	color?: string
	size?: number
	textStyle?: StyleProp<TextStyle>
}

export function SimpleLoadingIndicator(props: SimpleLoadingIndicatorProps) {
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			<ActivityIndicator color={props.color || COLORS.primary500} size={props.size || 120} />
			<Text style={[styles.text, props.textStyle]}>Carregando...</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 24,
		fontWeight: '600',
		paddingTop: 10,
		color: COLORS.primary500,
	},
})

import React from 'react'
import {
	View,
	Pressable,
	Text,
	StyleSheet,
	ViewStyle,
	ActivityIndicator,
	TextStyle
} from 'react-native'
import { COLORS } from '../../constants/colors'

interface PrimaryButtonProps {
	onPress: () => void
	title: string
	style?: ViewStyle
	textStyle?: TextStyle
	isLoading?: boolean
	locked?: boolean
}

export function PrimaryButton(props: PrimaryButtonProps) {
	return (
		<View style={[styles.buttonOuterContainer, props?.style]}>
			<Pressable
				style={({ pressed }) => [
					styles.buttonInnerContainer,
					pressed && styles.pressed,
					props.locked && { backgroundColor: COLORS.secondary500 }
				]}
				onPress={() => {
					if (!props.locked) {
						props.onPress()
					}
				}}
			>
				{props.isLoading && (
					<ActivityIndicator style={{ position: 'absolute' }} size='large' color='#fff' />
				)}
				<Text style={[styles.buttonText, props.textStyle, props.isLoading && { opacity: 0 }]}>
					{props.title}
				</Text>
			</Pressable>
		</View>
	)
}
const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 30,
		overflow: 'hidden',
		backgroundColor: COLORS.primary500,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 3,
		shadowOpacity: 0.3
	},
	buttonInnerContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		textAlign: 'center',
		color: COLORS.secondary100,
		fontSize: 20,
		fontWeight: '500'
	},
	pressed: {
		backgroundColor: COLORS.primary400
	}
})

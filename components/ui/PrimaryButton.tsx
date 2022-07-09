import React from 'react'
import { View, Pressable, Text, StyleSheet, ViewStyle } from 'react-native'
import { COLORS } from '../../constants/colors'

interface PrimaryButtonProps {
	onPress: () => void
	title: string
	style?: ViewStyle
}

export function PrimaryButton(props: PrimaryButtonProps) {
	return (
		<View style={[styles.buttonOuterContainer, props?.style]}>
			<Pressable
				style={({ pressed }) =>
					pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer
				}
				onPress={props.onPress}
			>
				<Text style={styles.buttonText}>{props.title}</Text>
			</Pressable>
		</View>
	)
}
const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 30,
		margin: 4,
		overflow: 'hidden',
		backgroundColor: COLORS.primary500,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 5,
		shadowOpacity: 0.5
	},
	buttonInnerContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16
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

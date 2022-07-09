import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import { COLORS } from '../../constants/colors'

interface FormStepsBarProps {
	maxSteps: number
	currentStep: number
	style?: ViewStyle
}

function StepBall(props: { step: number; actived: boolean; target: boolean }) {
	return (
		<View
			style={[
				props.actived ? styles.on : styles.off,
				styles.ballElement,
				props.target ? styles.target : null
			]}
		>
			<Text style={styles.text}>{props.step}</Text>
		</View>
	)
}

function StepJoint(props: { actived: boolean }) {
	return <View style={[props.actived ? styles.on : styles.off, styles.stepJoint]} />
}

export function FormStepsBar(props: FormStepsBarProps) {
	return (
		<View style={[styles.barContainer, props.style]}>
			{Array.from(Array(props.maxSteps).keys()).map(step => {
				if (step + 1 < props.maxSteps) {
					return (
						<>
							<StepBall
								key={step}
								step={step + 1}
								target={step + 1 === props.currentStep}
								actived={step + 1 <= props.currentStep}
							/>
							<StepJoint actived={step + 1 <= props.currentStep - 1} />
						</>
					)
				}
				return (
					<StepBall
						key={step}
						step={step + 1}
						target={step + 1 === props.currentStep}
						actived={step + 1 <= props.currentStep}
					/>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	barContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row'
	},
	ballElement: {
		padding: 7,
		width: 40,
		height: 40,
		alignItems: 'center',
		borderRadius: 100
	},
	text: {
		color: COLORS.secondary100,
		fontWeight: '600',
		fontSize: 18
	},
	stepJoint: {
		height: 5,
		flex: 1,
		marginHorizontal: 5
	},
	on: {
		backgroundColor: COLORS.primary500
	},
	off: {
		backgroundColor: COLORS.secondary500
	},
	target: {}
})

import { View, Text, StyleSheet, ViewStyle, Dimensions } from 'react-native'
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
			{Array.from(Array(props.maxSteps).keys()).map((step, key) => {
				if (step + 1 < props.maxSteps) {
					return (
						<View key={key} style={{ flexDirection: 'row', alignItems: 'center' }}>
							<StepBall
								key={step}
								step={step + 1}
								target={step + 1 === props.currentStep}
								actived={step + 1 <= props.currentStep}
							/>
							<StepJoint key={step + 1000} actived={step + 1 <= props.currentStep - 1} />
						</View>
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
		justifyContent: 'center',
		flexDirection: 'row'
	},
	ballElement: {
		padding: 7,
		width: 35,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100
	},
	text: {
		color: COLORS.secondary100,
		fontWeight: '600',
		position: 'absolute',
		fontSize: 18
	},
	stepJoint: {
		height: 5,
		width: Dimensions.get('window').width * 0.25
	},
	on: {
		backgroundColor: COLORS.primary500
	},
	off: {
		backgroundColor: COLORS.secondary500
	},
	target: {}
})

import React from 'react'
import { View, Text, StyleSheet, Pressable, Platform, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors'
import { PontoTuristico } from '../../types/Turismo'

interface TurismoListItemProps {
	pontoTuristico: PontoTuristico
	onPress: () => void
}

export function TurismoListItem(props: TurismoListItemProps) {
	const pt = props.pontoTuristico

	return (
		<View style={styles.outterContainer}>
			<View style={styles.innerContainer}>
				<Pressable
					style={({ pressed }) =>
						pressed && Platform.OS === 'ios' ? [styles.pressable, styles.pressed] : styles.pressable
					}
					onPress={props.onPress}
					android_ripple={{ color: '#ccc' }}
				>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 15 }}>
						<View style={{ borderRadius: 10, overflow: 'hidden' }}>
							<Image style={styles.thumbnail} resizeMode='cover' source={{ uri: pt.thumbnail }} />
						</View>
						<View style={{ flex: 1, alignItems: 'center' }}>
							<Text style={styles.title}>{pt.nome}</Text>
						</View>
						<View
							style={{
								borderRadius: 10,
								overflow: 'hidden',
								alignItems: 'center',
								backgroundColor: COLORS.primary400,
								padding: 2,
							}}
						>
							<Ionicons name='chevron-forward' size={32} color='#fff' />
						</View>
					</View>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	outterContainer: {
		width: 340,
		height: 100,
		borderRadius: 10,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 3,
		shadowOpacity: 0.3,
		marginBottom: 20,
		marginHorizontal: 6,
	},
	innerContainer: {
		flex: 1,
		borderRadius: 10,
		overflow: 'hidden',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	pressable: {
		backgroundColor: COLORS.secondary100,
		flex: 1,
		height: '100%',
	},
	pressed: {
		// backgroundColor: COLORS.secondary200,
		opacity: 0.8,
	},
	thumbnail: {
		height: 70,
		width: 80,
	},
	title: {
		fontWeight: '600',
		textAlign: 'center',
		marginHorizontal: 2,
		fontSize: 18,
		color: COLORS.primary400,
	},
})

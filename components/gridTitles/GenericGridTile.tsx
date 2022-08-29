import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Image,
	Platform,
	ImageSourcePropType
} from 'react-native'
import { COLORS } from '../../constants/colors'

interface GenericGridTitleProps {
	title: string
	img: string
	onPress: () => void
}

export function GenericGridTile(props: GenericGridTitleProps) {
	return (
		<View style={styles.outterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed && Platform.OS === 'ios'
						? [styles.innerContainer, styles.pressed]
						: styles.innerContainer
				}
				onPress={props.onPress}
				android_ripple={{ color: '#ccc' }}
			>
				<View style={styles.serviceImageContainer}>
					<Image
						resizeMode='contain'
						style={styles.serviceImage}
						source={props.img as ImageSourcePropType}
					/>
				</View>
				<View style={styles.serviceTitleContainer}>
					<Text style={styles.serviceTitle}>{props.title}</Text>
				</View>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	outterContainer: {
		width: 348,
		height: 80,
		backgroundColor: COLORS.secondary100,
		borderRadius: 10,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 3,
		shadowOpacity: 0.3,
		marginBottom: 20,
		marginHorizontal: 6
	},
	innerContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 6,
		justifyContent: 'space-around'
	},
	pressed: {
		opacity: 0.6
	},
	serviceImage: {
		width: 65,
		height: 65
	},
	serviceImageContainer: {
		width: '50%',
		alignItems: 'center'
	},
	serviceTitleContainer: {
		width: '50%',
		alignItems: 'center'
	},
	serviceTitle: {
		fontSize: 20,
		color: COLORS.primary500,
		textAlign: 'center',
		fontWeight: '500'
	}
})

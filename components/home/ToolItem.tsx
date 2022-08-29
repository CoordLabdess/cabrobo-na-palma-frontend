import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Image,
	Platform,
	ImageSourcePropType
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Tool } from '../../types/global'
import { COLORS } from '../../constants/colors'

interface ToolItemProps {
	tool: Tool
}

export function ToolItem(props: ToolItemProps) {
	const navigation = useNavigation()
	return (
		<View style={styles.outterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed && Platform.OS === 'ios'
						? [styles.innerContainer, styles.pressed]
						: styles.innerContainer
				}
				onPress={() => {
					navigation.navigate(props.tool.navigateTo as never)
				}}
				android_ripple={{ color: '#ccc' }}
			>
				<Image
					resizeMode='contain'
					style={styles.toolImage}
					source={props.tool.img as ImageSourcePropType}
				/>
				<Text style={styles.toolTitle}>{props.tool.title}</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	outterContainer: {
		width: 160,
		height: 110,
		backgroundColor: COLORS.secondary100,
		borderRadius: 10,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 3,
		shadowOpacity: 0.3,
		marginBottom: 12,
		marginHorizontal: 6
	},
	innerContainer: {
		flex: 1,
		alignItems: 'center',
		padding: 6,
		justifyContent: 'space-between'
	},
	pressed: {
		opacity: 0.6
	},
	toolImage: {
		width: 72,
		height: 72
	},
	toolTitle: {
		color: COLORS.primary500,
		fontWeight: '500'
	}
})

import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Image,
	Platform,
	ImageSourcePropType
} from 'react-native'
import { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MajorService, MinorService } from '../../types/global'
import { COLORS } from '../../constants/colors'
import { SolicitarServicoFormContext } from '../../store/SolicitarServicosContext'

interface ServiceItemProps {
	service: MajorService | MinorService
}

export function ServiceItem(props: ServiceItemProps) {
	const ServiceCtx = useContext(SolicitarServicoFormContext)

	const navigation = useNavigation()

	function handleNavigation() {
		if (props.service.category === 'MajorService') {
			ServiceCtx.updateMajorServiceId(props.service.id)
			navigation.navigate(
				'SolicitarServicosMinor' as never,
				{
					serviceId: props.service.id,
					serviceType: 'MinorServices',
					serviceTitle: props.service.title
				} as never
			)
		} else if (props.service.category === 'MinorService') {
			ServiceCtx.updateMinorServiceId(props.service.id)
			navigation.navigate(
				'SolicitarServicosForm1' as never,
				{
					serviceId: (props.service as MinorService).formId,
					serviceType: 'MinorServiceForm',
					serviceTitle: props.service.title,
					step: 1
				} as never
			)
		}
	}

	return (
		<View style={styles.outterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed && Platform.OS === 'ios'
						? [styles.innerContainer, styles.pressed]
						: styles.innerContainer
				}
				onPress={() => {
					handleNavigation()
				}}
				android_ripple={{ color: '#ccc' }}
			>
				<View style={styles.serviceImageContainer}>
					<Image
						resizeMode='contain'
						style={styles.serviceImage}
						source={props.service.img as ImageSourcePropType}
					/>
				</View>
				<View style={styles.serviceTitleContainer}>
					<Text style={styles.serviceTitle}>{props.service.title}</Text>
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

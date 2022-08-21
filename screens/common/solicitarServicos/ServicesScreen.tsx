import { View, Button, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import { ServicesGrid } from '../../../components/services/ServicesGrid'
import { MinorService, MajorService, RouteProp } from '../../../types/global'
import { allMajorServices } from '../../../data/majorServices'
import { allMinorServices } from '../../../data/minorServices'
import { allTools } from '../../../data/toolsData'
import { COLORS } from '../../../constants/colors'
import { ServiceItem } from '../../../components/services/ServiceItem'

interface ServiceScreenProps {
	route: RouteProp
}

export function ServicesScreen(props: ServiceScreenProps) {
	const navigation = useNavigation()
	const [serviceId, setServiceId] = useState(-1)
	const [serviceTitle, setServiceTitle] = useState('')
	const [serviceType, setServiceType] = useState('')
	const [dataArray, setDataArray] = useState<MinorService[] | MajorService[]>([])

	useLayoutEffect(() => {
		setServiceId(props.route.params?.serviceId)
		setServiceTitle(props.route.params?.serviceTitle)
		setServiceType(props.route.params?.serviceType)
	}, [])

	useLayoutEffect(() => {
		navigation.setOptions({
			title: serviceTitle || 'Solicitar Servicos'
		})
	}, [serviceTitle])

	useLayoutEffect(() => {
		if (!serviceType) {
			setDataArray(
				allMajorServices.filter(majorService => {
					return allTools
						.filter(tool => {
							return tool.id === 1
						})[0]
						.majorServicesIds.includes(majorService.id)
				})
			)
		} else if (serviceType === 'MinorServices') {
			setDataArray(
				allMinorServices.filter(minorService => {
					return allMajorServices
						.filter(majorService => {
							return majorService.id === serviceId
						})[0]
						.minorServicesId.includes(minorService.id)
				})
			)
		}
	}, [serviceId, serviceType])

	return (
		<View>
			<FlatList
				keyboardShouldPersistTaps='handled'
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-start',
					paddingHorizontal: '5%',
					alignItems: 'center',
					paddingBottom: 20
				}}
				alwaysBounceVertical={false}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => (
					<View style={styles.servicesGridTitleContainer}>
						<Text style={styles.servicesGridTitle}>
							Envie sua solicitação para que a prefeitura trabalhe nas soluções dos problemas da
							nossa cidade.
						</Text>
					</View>
				)}
				data={dataArray}
				keyExtractor={item => {
					return item.id.toString()
				}}
				renderItem={itemData => {
					return <ServiceItem service={itemData.item} />
				}}
				numColumns={1}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	servicesGridTitleContainer: {
		width: '100%',
		paddingHorizontal: 45,
		marginTop: 30
	},
	servicesGridTitle: {
		color: COLORS.secondary500,
		fontWeight: '400',
		fontSize: 15,
		marginLeft: 5,
		textAlign: 'left',
		marginBottom: 30
	},
	servicesGridContainer: {
		marginTop: 20,
		width: '100%',
		alignItems: 'center'
	},
	servicesGrid: {
		width: '100%'
	}
})

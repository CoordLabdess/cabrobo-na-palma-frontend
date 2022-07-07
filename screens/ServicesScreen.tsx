import { View, Button, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import { ServicesGrid } from '../components/services/ServicesGrid'
import { MinorService, MajorService, RouteProp } from '../types/global'
import { allMajorServices } from '../data/majorServices'
import { allMinorServices } from '../data/minorServices'
import { allTools } from '../data/toolsData'

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
			title: serviceTitle
		})
	}, [serviceTitle])

	useLayoutEffect(() => {
		if (serviceType === 'MajorServices') {
			setDataArray(
				allMajorServices.filter(majorService => {
					return allTools
						.filter(tool => {
							return tool.id === serviceId
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
			<ServicesGrid servicesArray={dataArray} />
		</View>
	)
}

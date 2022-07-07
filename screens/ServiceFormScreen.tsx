import { useLayoutEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RouteProp } from '../types/global'
import { HTMLMap } from '../components/HTMLMap'

interface ServiceScreenProps {
	route: RouteProp
}

export function ServiceFormScreen(props: ServiceScreenProps) {
	const navigation = useNavigation()
	const [serviceId, setServiceId] = useState(-1)
	const [serviceTitle, setServiceTitle] = useState('')
	const [serviceType, setServiceType] = useState('')

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

	return (
		<View>
			<Text>Service Form</Text>
			<HTMLMap />
		</View>
	)
}

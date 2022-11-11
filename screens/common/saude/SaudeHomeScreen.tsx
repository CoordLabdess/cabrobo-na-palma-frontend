import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	ImageSourcePropType,
	ImageURISource,
	Platform,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect, useState } from 'react'
import { MinorService, MajorService, RouteProp, Tool } from '../../../types/global'
import { allMajorServices } from '../../../data/majorServices'
import { allMinorServices } from '../../../data/minorServices'
import { allTools } from '../../../data/toolsData'
import { COLORS } from '../../../constants/colors'
import { ServiceItem } from '../../../components/services/ServiceItem'
import { useServiceRequestForm } from '../../../store/SolicitarServicosContext'
import { saudeMajorServices } from '../../../data/saudeMajorServices'
import { GenericGridTile } from '../../../components/gridTitles/GenericGridTile'
import Header from '../../../components/common/Header'
import { RoutesType } from '../../../types/routes'
import { PaginaEmConstrucao } from '../../public/PaginaEmConstrucao'

interface ServiceScreenProps {
	route: RouteProp
}

export function SaudeHomeScreen(props: ServiceScreenProps) {
	const navigation = useNavigation()
	const [serviceId, setServiceId] = useState(-1)
	const [serviceTitle, setServiceTitle] = useState('')
	const [serviceType, setServiceType] = useState('')
	const [dataArray, setDataArray] = useState<MinorService[] | MajorService[]>([])
	const [currentService, setCurrentService] = useState<Tool | MajorService>()
	const solicitarServicosContext = useServiceRequestForm()

	useLayoutEffect(() => {
		setServiceId(props.route.params?.serviceId)
		setServiceTitle(props.route.params?.serviceTitle)
		setServiceType(props.route.params?.serviceType)

		setCurrentService(allTools.filter(m => m.id === 3)[0])
	}, [])

	useLayoutEffect(() => {
		navigation.setOptions({
			title: serviceTitle || 'Saúde',
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
				}),
			)
		} else if (serviceType === 'MinorServices') {
			setDataArray(
				allMinorServices.filter(minorService => {
					return allMajorServices
						.filter(majorService => {
							return majorService.id === serviceId
						})[0]
						.minorServicesId.includes(minorService.id)
				}),
			)
		}
	}, [serviceId, serviceType])

	if (!dataArray || !currentService) {
		return (
			<View>
				<Text>Carregando...</Text>
			</View>
		)
	}

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{Platform.OS === `ios` ? (
				<PaginaEmConstrucao />
			) : (
				<View>
					<Header goBack title='Saúde' />
					<FlatList
						keyboardShouldPersistTaps='handled'
						contentContainerStyle={{
							flexGrow: 1,
							justifyContent: 'flex-start',
							paddingHorizontal: '5%',
							alignItems: 'center',
							paddingBottom: 20,
						}}
						alwaysBounceVertical={false}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={() => (
							<View style={styles.servicesGridTitleContainer}>
								<View style={{ alignItems: 'center' }}>
									<Image
										resizeMode='contain'
										style={styles.serviceImg}
										source={currentService.img2 as ImageSourcePropType}
										defaultSource={currentService.img2 as ImageURISource}
									/>
									<Text style={styles.servicesGridTitle}>
										Veja os mapas referentes aos casos de COVID-19 e dengue no município
									</Text>
								</View>
							</View>
						)}
						data={saudeMajorServices}
						keyExtractor={item => {
							return item.id.toString()
						}}
						renderItem={itemData => {
							return (
								<GenericGridTile
									img={itemData.item.imgMono}
									title={itemData.item.title}
									onPress={() => {
										navigation.navigate(itemData.item.alias as RoutesType)
									}}
								/>
							)
						}}
						numColumns={1}
					/>
				</View>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	servicesGridTitleContainer: {
		width: '100%',
		paddingHorizontal: 45,
		marginVertical: 30,
	},
	servicesGridTitle: {
		color: COLORS.secondary500,
		fontWeight: '400',
		fontSize: 15,
		marginLeft: 5,
		textAlign: 'center',
	},
	servicesGridContainer: {
		marginTop: 20,
		width: '100%',
		alignItems: 'center',
	},
	servicesGrid: {
		width: '100%',
	},
	serviceImg: {
		height: 122,
		width: 188,
		marginBottom: 10,
	},
})

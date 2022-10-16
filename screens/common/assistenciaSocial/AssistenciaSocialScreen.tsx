import React from 'react'
import { Center, ScrollView, Text, VStack, FlatList, Box, HStack, Image } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Header from '../../../components/common/Header'
import assistenciaSocialColor from '../../../assets/home/assistenciaSocialColor.png'
import auxilioBrasilMono from '../../../assets/services/assistenciaSocial/auxilioBrasilMono.png'
import { COLORS } from '../../../constants/colors'
import { useNavigation } from '@react-navigation/native'

const services = [
	{
		id: 1,
		title: 'Auxílio Brasil',
		goTo: 'AuxilioBrasil',
		icon: auxilioBrasilMono,
	},
]

export function AssistenciaSocialScreen() {
	const navigation = useNavigation()

	return (
		<>
			<Header goBack title='Assistência Social' />
			<Center flex={1}>
				<FlatList
					px={10}
					ListHeaderComponent={() => {
						return (
							<Center w='100%' my={5}>
								<VStack alignItems={'center'} space={2}>
									<Image source={assistenciaSocialColor} size='xl' alt='Assistência Social' />
									<Text textAlign={'center'} fontSize={15} w={40} color={COLORS.secondary500}>
										Consulte os serviços e benefícios que você possui direito
									</Text>
								</VStack>
							</Center>
						)
					}}
					showsVerticalScrollIndicator={false}
					flex={1}
					w='100%'
					data={services}
					ItemSeparatorComponent={() => <Box my={4} />}
					renderItem={itemData => (
						<TouchableOpacity onPress={() => navigation.navigate(itemData.item.goTo as never)}>
							<Box bgColor='#fff' p={4} borderRadius={10} shadow={2} w='100%' flex={1}>
								<HStack justifyContent={'space-around'} alignItems='center'>
									<Image source={itemData.item.icon} size='sm' alt='Auxílio Brasil' />
									<Text fontSize={20} color={COLORS.primary500} fontWeight='600'>
										{itemData.item.title}
									</Text>
								</HStack>
							</Box>
						</TouchableOpacity>
					)}
				/>
			</Center>
		</>
	)
}

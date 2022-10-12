import { FlatList, View, Text, Box, Column, Heading, Center } from 'native-base'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Header from '../../../components/common/Header'
import { TextInput } from '../../../components/common/TextInput'
import { useUser } from '../../../store/userContext'

export default function EstablishmentsListScreen() {
	const { buscarEstabelecimentos, establishments } = useUser()

	const [search, setSearch] = useState('')
	const [filteredEstablishments, setFilteredEstablishments] = useState(establishments)

	useEffect(() => {
		buscarEstabelecimentos()
	}, [])

	useEffect(() => {
		const filtered = establishments.filter(establishment =>
			establishment.attributes.name.toLowerCase().includes(search.toLowerCase()),
		)
		setFilteredEstablishments(filtered)
	}, [search])

	return (
		<>
			<Header goBack title='Procurar Estabelecimento' />
			<Center mx={8} flex={1}>
				<Box my={4} w='100%'>
					<TextInput
						value={search}
						handleChange={text => setSearch(text)}
						placeholder='Pesquise pelo nome do estabelecimento'
					/>
				</Box>
				<FlatList
					scrollEnabled
					data={search.length > 0 ? filteredEstablishments : establishments}
					keyExtractor={item => {
						return item.attributes.FID.toString()
					}}
					w='100%'
					showsVerticalScrollIndicator={false}
					renderItem={itemData => {
						return (
							<TouchableOpacity>
								<Box bgColor='#fff' p={4} my={4} borderRadius={10} shadow={2} w='100%' flex={1}>
									<Text fontSize='lg'>{itemData.item.attributes.name}</Text>
									<Text>{itemData.item.attributes.snippet}</Text>
								</Box>
							</TouchableOpacity>
						)
					}}
				/>
			</Center>
		</>
	)
}

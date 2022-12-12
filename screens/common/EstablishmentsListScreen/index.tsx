import { FlatList, View, Text, Box, Column, Center, Row, Button, Spinner } from 'native-base'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Header from '../../../components/common/Header'
import { TextInput } from '../../../components/common/TextInput'
import { useUser } from '../../../store/userContext'
import { MapModal } from '../../../components/modals/MapModal'
import { Coords } from '../../../types/global'

export default function EstablishmentsListScreen() {
	const { buscarEstabelecimentos, establishments, setEstablishments, loading } = useUser()
	const [estabelecimento, setEstabelecimento] = useState<{ coords: Coords; nome: string } | null>(
		null,
	)

	const [search, setSearch] = useState('')

	useEffect(() => {
		if (search.length === 0) {
			buscarEstabelecimentos()
		}
	}, [search])

	const handleSearch = () => {
		const filtered = establishments.filter(establishment =>
			establishment.attributes.name.toLowerCase().includes(search.toLowerCase()),
		)
		setEstablishments(filtered)
	}

	return (
		<>
			<Header goBack title='Procurar Estabelecimento' />
			<Column mx={8} flex={1}>
				<Row my={4} w='100%' justifyContent='space-between' space={3}>
					<Box flex='1'>
						<TextInput
							value={search}
							handleChange={text => setSearch(text)}
							placeholder='Pesquisar nome do estabelecimento'
						/>
					</Box>
					<Column justifyContent='center'>
						<Button bgColor='#123A56' onPress={handleSearch}>
							<FontAwesome name='search' size={20} color='white' />
						</Button>
					</Column>
				</Row>
				{loading ? (
					<Spinner color='#123A56' size='lg' mt={4} />
				) : (
					<FlatList
						scrollEnabled
						data={establishments}
						keyExtractor={item => {
							return item.attributes.FID.toString()
						}}
						w='100%'
						showsVerticalScrollIndicator={false}
						renderItem={itemData => {
							return (
								<TouchableOpacity
									onPress={() =>
										setEstabelecimento({
											nome: itemData.item.attributes.name,
											coords: {
												longitude: itemData.item.attributes.long,
												latitude: itemData.item.attributes.lat,
											},
										})
									}
								>
									<Box bgColor='#fff' p={4} my={4} borderRadius={10} shadow={2} w='100%' flex={1}>
										<Text fontSize='lg'>{itemData.item.attributes.name}</Text>
										<Text>{itemData.item.attributes.snippet}</Text>
									</Box>
								</TouchableOpacity>
							)
						}}
					/>
				)}
			</Column>
			{estabelecimento && (
				<MapModal
					title={estabelecimento.nome}
					buttonTitle='Fechar'
					message='Localização do estabelecimento'
					onContinue={() => setEstabelecimento(null)}
					visible={estabelecimento !== null}
					initialCoords={estabelecimento.coords}
				/>
			)}
		</>
	)
}

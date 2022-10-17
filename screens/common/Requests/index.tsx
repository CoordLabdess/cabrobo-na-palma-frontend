import { Box, Column, Button, Row, Heading, Spinner } from 'native-base'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import Header from '../../../components/common/Header'
import { TextInput } from '../../../components/common/TextInput'
import { useUser } from '../../../store/userContext'
import RequestCard from '../../../components/Requests/RequestCard'
import { RequestProps } from '../../../utils/contextTypes'
import { removerCaracteresEspeciais } from '../../../utils/validaçõesString'

export default function RequestsListScreen() {
	const { getRequest, request, setRequest, loading } = useUser()

	const [search, setSearch] = useState('')

	const handleSearch = () => {
		getRequest(search)
		setSearch('')
	}

	useEffect(() => {
		setRequest({} as RequestProps)
	}, [])

	function formatProtocol(text: string) {
		const s = removerCaracteresEspeciais(text).split('')
		if (s.length <= 12) {
			setSearch(
				s
					.map((b, i) => {
						if (i === 8) {
							return `-${b}`
						} else if (i === 4) {
							return `.${b}`
						} else {
							return b
						}
					})
					.join(''),
			)
		}
	}

	return (
		<>
			<Header goBack title='Procurar Solicitação' />
			<Column mx={8} flex={1}>
				<Heading alignSelf={'center'} my={4} color='#123A56'>
					Minhas Solicitações
				</Heading>
				<Row my={4} w='100%' space={3}>
					<Box flex='1'>
						<TextInput
							numeric
							value={search}
							handleChange={text => formatProtocol(text)}
							placeholder='Pesquise pelo número do protocolo'
						/>
					</Box>
					<Column justifyContent='center'>
						<Button bgColor='#123A56' onPress={handleSearch}>
							<FontAwesome name='search' size={20} color='white' />
						</Button>
					</Column>
				</Row>
				{loading && <Spinner color='#123A56' size='lg' mt={4} />}
				{request.TIPO && <RequestCard />}
			</Column>
		</>
	)
}
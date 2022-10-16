import { ImageSourcePropType, ImageURISource } from 'react-native'
import React from 'react'
import { Column, Row, Text, Image } from 'native-base'

import { EvilIcons } from '@expo/vector-icons'
import { useUser } from '../../store/userContext'
import { allMinorServices } from '../../data/minorServices'

export default function RequestCard() {
	const { request } = useUser()

	const img: any = allMinorServices.filter(service => {
		return service.title === request.TIPO
	})

	return (
		<Column borderWidth='1px' borderRadius='lg' flexShrink={1}>
			<Row justifyContent={'space-between'} p={2} borderBottomWidth='1px'>
				<Row space={2}>
					<Text fontWeight={300}>Pedido</Text>
					<Text fontWeight={300}>#{request.PROTOCOLO}</Text>
				</Row>
				<Text fontWeight={300}>{new Date(request.CreationDate).toLocaleDateString('pt-BR')}</Text>
			</Row>
			<Row color='#123A56' alignItems='center' space={4} py={2} borderBottomWidth='1px'>
				<EvilIcons name='clock' size={36} />
				<Column>
					<Text fontWeight={500} fontSize='lg'>
						Situação
					</Text>
					<Text fontWeight={300}>{request.STATUS}</Text>
				</Column>
			</Row>
			<Row color='#123A56' alignItems='center' space={4} p={2} borderBottomWidth='1px'>
				<Image
					resizeMode='contain'
					w={'6'}
					source={Number(img[0].img) as ImageSourcePropType}
					defaultSource={Number(img[0].img) as ImageURISource}
					alt='Service Icon'
				/>
				<Column>
					<Text fontWeight={500} fontSize='lg'>
						Tipo de serviço
					</Text>
					<Text fontWeight={300}>{request.TIPO}</Text>
				</Column>
			</Row>
			<Row color='#123A56' alignItems='center' space={4} py={2} flexShrink={1}>
				<EvilIcons name='location' size={36} />
				<Column flexShrink={1}>
					<Text fontWeight={500} fontSize='lg'>
						Local do Serviço
					</Text>
					<Text fontWeight={300} flexShrink={1}>
						{request.ENDEREÇO}, S/N
					</Text>
					<Text fontWeight={300}>{request.BAIRRO}</Text>
					<Text fontWeight={300}>{request.CIDADE} - PE</Text>
				</Column>
			</Row>
		</Column>
	)
}

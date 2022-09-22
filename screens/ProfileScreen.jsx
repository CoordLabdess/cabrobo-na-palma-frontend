import React from 'react'
import { Text, VStack, Center, ScrollView, Avatar, Column } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import ProfileListItem from '../components/ProfileScreen/ProfileListItem'

const menuList = [
	'Minhas Solicitações',
	'Ouvidoria',
	'Dados Pessoais',
	'Outro Usuário',
	'Encerrar Sessão',
]

export function ProfileScreen() {
	return (
		<ScrollView showsVerticalScrollIndicator={false} flex={1} my={10}>
			<Center flex={1}>
				<VStack space={20}>
					<Column alignItems='center' space={4}>
						<Avatar
							source={{
								uri: 'https://wallpaperaccess.com/full/317501.jpg',
							}}
							size='2xl'
						>
							<Avatar.Badge bgColor='transparent'>
								<FontAwesome name='camera' size={20} color='#123A56' />
							</Avatar.Badge>
							GN
						</Avatar>
						<VStack>
							<Text fontWeight={600} color='#123A56' fontSize='4xl'>
								Galego de Nanai
							</Text>
						</VStack>
					</Column>
					<VStack space={3}>
						{menuList.map((item, index) => (
							<ProfileListItem key={index} title={item} />
						))}
					</VStack>
				</VStack>
			</Center>
		</ScrollView>
	)
}

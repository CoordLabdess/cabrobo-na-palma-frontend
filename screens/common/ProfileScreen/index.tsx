import React from 'react'
import { Text, VStack, HStack, Center, ScrollView, Avatar } from 'native-base'
import MenuListItem from '../../../components/MenuScreen/MenuListItem'

const menuList = [
	'Minhas Solicitações',
	'Dados Pessoais',
	'Outro Usuário',
	'Sobre',
	'Avalie o Aplicativo',
	'Política de Privacidade',
	'Como Usar o Aplicativo',
	'Compartilhe com um Amigo',
]

export function ProfileScreen() {
	return (
		<ScrollView showsVerticalScrollIndicator={false} flex={1} my={10}>
			<Center flex={1}>
				<VStack space={20}>
					<HStack alignItems='center' space={4}>
						<Avatar
							source={{
								uri: 'https://wallpaperaccess.com/full/317501.jpg',
							}}
							size='xl'
						>
							GN
						</Avatar>
						<VStack>
							<Text fontWeight={600} color='#123A56' fontSize='2xl'>
								Galego de Nanai
							</Text>
							<Text color='#123A56' fontSize='xl'>
								Gestor
							</Text>
							<Text color='#123A56' fontSize='xl'>
								999.999.999-99
							</Text>
						</VStack>
					</HStack>
					<VStack space={6}>
						{menuList.map((item, index) => (
							<MenuListItem key={index} title={item} />
						))}
					</VStack>
				</VStack>
			</Center>
		</ScrollView>
	)
}

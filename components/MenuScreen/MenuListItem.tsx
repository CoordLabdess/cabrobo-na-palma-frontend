import { Button, Row, Text, Pressable } from 'native-base'
import React from 'react'
import {
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	Feather,
	FontAwesome,
} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface MenuListItemProps {
	title: string
}

export default function MenuListItem({ title }: MenuListItemProps) {
	const navigation = useNavigation()
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('PersonalData')
			}}
		>
			<Row space={2} alignItems='center'>
				{title === 'Minhas Solicitações' ? (
					<MaterialCommunityIcons name='text-box-search-outline' size={24} color='#123A56' />
				) : title === 'Dados Pessoais' ? (
					<Octicons name='person' size={24} color='#123A56' />
				) : title === 'Outro Usuário' ? (
					<MaterialCommunityIcons name='account-switch' size={24} color='#123A56' />
				) : title === 'Sobre' ? (
					<Feather name='info' size={24} color='#123A56' />
				) : title === 'Avalie o Aplicativo' ? (
					<MaterialCommunityIcons name='star-box-outline' size={24} color='#123A56' />
				) : title === 'Política de Privacidade' ? (
					<MaterialCommunityIcons name='sort-variant-lock' size={24} color='#123A56' />
				) : title === 'Como Usar o Aplicativo' ? (
					<MaterialIcons name='touch-app' size={24} color='#123A56' />
				) : title === 'Compartilhe com um Amigo' ? (
					<FontAwesome name='share-square-o' size={24} color='#123A56' />
				) : null}
				<Text color='#123A56' fontWeight={600} fontSize='xl'>
					{title}
				</Text>
			</Row>
		</TouchableOpacity>
	)
}

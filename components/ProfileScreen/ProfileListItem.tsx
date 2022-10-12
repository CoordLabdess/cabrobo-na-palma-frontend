import { Row, Text } from 'native-base'
import React from 'react'
import {
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
	FontAwesome,
	FontAwesome5,
} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Navigation } from '../../routers/Navigation'
import { useAuth } from '../../store/AuthContext'

interface MenuListItemProps {
	title: string
}

export default function ProfileListItem({ title }: MenuListItemProps) {
	const navigation = useNavigation()
	const { logout } = useAuth()
	const handlePress = () => {
		if (title === 'Encerrar Sessão') {
			logout()
		} else if (title === 'Dados Pessoais') {
			navigation.navigate('PersonalData')
		}
	}
	return (
		<TouchableOpacity onPress={handlePress}>
			<Row
				alignItems='center'
				borderWidth={1}
				borderColor='#123A56'
				borderRadius={10}
				p={2}
				justifyContent='space-between'
			>
				<Row alignItems='center' space={2}>
					{title === 'Minhas Solicitações' ? (
						<MaterialCommunityIcons name='text-box-search-outline' size={24} color='#123A56' />
					) : title === 'Dados Pessoais' ? (
						<Octicons name='person' size={24} color='#123A56' />
					) : title === 'Outro Usuário' ? (
						<MaterialCommunityIcons name='account-switch' size={24} color='#123A56' />
					) : title === 'Ouvidoria' ? (
						<FontAwesome5 name='headset' size={24} color='#123A56' />
					) : title === 'Encerrar Sessão' ? (
						<SimpleLineIcons name='logout' size={24} color='#123A56' />
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
				<MaterialIcons name='arrow-forward-ios' size={24} color='#123A56' />
			</Row>
		</TouchableOpacity>
	)
}

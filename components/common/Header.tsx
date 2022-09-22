import React from 'react'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HStack, IconButton, Text } from 'native-base'
import { ColorType } from 'native-base/lib/typescript/components/types'

interface HeaderProps {
	title?: string
	bgColor?: ColorType
	goBack?: boolean
	height?: number | string
	px?: number | string
	fontSize?: 'xs' | 'sm' | 'md' | 'lg'
}

export default function Header({ title, bgColor, goBack, height, px, fontSize }: HeaderProps) {
	const navigation = useNavigation()

	return (
		<HStack
			h={height || 70}
			width={'100%'}
			bgColor={bgColor || 'white'}
			alignItems={'center'}
			px={px || '10%'}
			space={3}
		>
			{goBack && (
				<IconButton
					size={fontSize || 'lg'}
					variant='solid'
					bgColor={'transparent'}
					p={0}
					m={-1}
					onPress={() => navigation.goBack()}
					_icon={{ as: Feather, name: 'arrow-left', color: 'black' }}
				/>
			)}
			{title && <Text fontSize={fontSize || 'lg'}>{title}</Text>}
		</HStack>
	)
}

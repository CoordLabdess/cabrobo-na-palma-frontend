import { FormControl, HStack, Icon, IInputProps, Input, Row, Text, View } from 'native-base'
import { convertAbsoluteToRem } from 'native-base/lib/typescript/theme/v33x-theme/tools'
import React, { useState } from 'react'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors'

interface TextInputProps extends IInputProps {
	question?: string
	handleChange: (text: string) => void
	value: string
	number?: string
	formError?: any[]
	required?: boolean
	mask?: string
	errorMessage?: string
	numeric?: boolean
	exclude?: boolean
	handleIconPress?: () => void
	title?: string
	placeholder?: string
}

export function TextInput({
	handleChange,
	value,
	formError,
	required,
	errorMessage,
	numeric,
	title,
	placeholder = 'Digite aqui...',
}: TextInputProps) {
	return (
		<View>
			<FormControl isRequired={required}>
				{title && (
					<Text fontWeight='500' fontSize={14} opacity={1} color={'#123A56'}>
						{title}
					</Text>
				)}
				<Input
					type='text'
					value={value}
					keyboardType={numeric ? 'numeric' : 'default'}
					onChangeText={handleChange}
					borderColor={'#123A56'}
					borderRadius={14}
					borderWidth={2}
					fontSize={14}
					paddingX={15}
					paddingY={8}
					color={COLORS.primary400}
					_focus={{
						borderColor: 'black',
						backgroundColor: 'transparent',
					}}
					placeholder={placeholder}
				/>
				{errorMessage && (
					<FormControl.HelperText
						_text={{
							fontSize: 14,
							color: 'danger.500',
						}}
					>
						{errorMessage}
					</FormControl.HelperText>
				)}
			</FormControl>
		</View>
	)
}

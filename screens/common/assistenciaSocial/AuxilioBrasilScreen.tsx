import React, { useState } from 'react'
import { Box, Button, Input, ScrollView, Text, VStack } from 'native-base'
import Header from '../../../components/common/Header'
import { COLORS } from '../../../constants/colors'

export function AuxilioBrasilScreen() {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<>
			<Header title='Auxílio Brasil' goBack />
			<ScrollView showsVerticalScrollIndicator={false} flex={1} py={10}>
				<Box w='100%' alignItems='center'>
					<VStack w='80%' maxW={400} space={5} alignItems='center'>
						<Text textAlign='center' color={COLORS.secondary500}>
							Consulte se você possui direito ao auxílio Brasil digitando seu NIS no campo abaixo.
						</Text>
						<Input placeholder='Digite seu NIS' />
						<Box w='60%' minW={180}>
							<Button onPress={() => console.log('Consultar')}>Consultar</Button>
						</Box>
					</VStack>
				</Box>
			</ScrollView>
		</>
	)
}

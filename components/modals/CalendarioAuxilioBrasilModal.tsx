import { StyleSheet } from 'react-native'
import React from 'react'
import { Modal, Text, Button, Center, VStack, ScrollView, FlatList, Box } from 'native-base'
import { obterListaDePagamentosDoAno, obterProxDiaPagamento } from '../../utils/arcgis'
import { COLORS } from '../../constants/colors'

interface CalendarioAuxilioBrasilModalProps {
	numFinalNis: string
	isVisible: boolean
	onClose: () => void
}

export function CalendarioAuxilioBrasilModal(props: CalendarioAuxilioBrasilModalProps) {
	return (
		<Modal isOpen={props.isVisible} onClose={props.onClose}>
			<Modal.Content maxH='412'>
				<Modal.CloseButton />
				<Modal.Header>Calendário de Pagamentos</Modal.Header>
				<Modal.Body>
					<Center>
						<FlatList
							data={obterListaDePagamentosDoAno(props.numFinalNis)}
							numColumns={2}
							renderItem={itemData => {
								return (
									<Center style={{ marginHorizontal: 10 }}>
										<Text
											fontWeight={'600'}
											fontSize={20}
											color={COLORS.primary500}
										>{`${itemData.item.dia}/${itemData.item.mes}`}</Text>
									</Center>
								)
							}}
						/>
					</Center>
				</Modal.Body>
				<Modal.Footer alignItems={'center'}>
					<Center w='100%'>
						<Button backgroundColor={COLORS.primary500} onPress={props.onClose}>
							Voltar
						</Button>
					</Center>
				</Modal.Footer>
			</Modal.Content>
		</Modal>
	)
}

const styles = StyleSheet.create({})

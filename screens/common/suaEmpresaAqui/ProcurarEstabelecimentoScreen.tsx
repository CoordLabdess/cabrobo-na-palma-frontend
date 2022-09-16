import { useLayoutEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../../constants/colors'
import { CovidMap } from '../../../components/maps/CovidMap'
import { SearchTextInput } from '../../../components/ui/textInputs/SearchTextInput'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { Estabelecimento, generateToken, obterTodosEstabelecimentos } from '../../../utils/arcgis'
import { Coords } from '../../../types/global'
import { HTMLMapEmpresas } from '../../../components/HTMLMapEmpresas'

interface Empresa {
	nome: string
	tipo: string
	status: string
	cnpj: string
}

const fakeEmpresa: Empresa[] = [
	{
		nome: 'Bar do Jeremenias',
		tipo: 'Restaurante',
		status: 'Aprovado',
		cnpj: '01.234-567/8901-23',
	},
	{
		nome: 'Hospital da Flores',
		tipo: 'Hospital',
		status: 'Aprovado',
		cnpj: '33.333-333/3333-33',
	},
]

export function ProcurarEstabelecimentoScreen() {
	const navigation = useNavigation()
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [estabelecimentos, setEstabelecimentos] = useState<Estabelecimento[]>([])
	const [coords, setCoords] = useState<Coords | null>(null)

	function buscarEstabelecimentos() {
		if (!isLoading) {
			setIsLoading(true)
			generateToken().then(token => {
				obterTodosEstabelecimentos(token)
					.then(res => {
						setIsLoading(false)
						setError(false)
						setEstabelecimentos(res.features)
					})
					.catch(err => {
						setIsLoading(false)
						setError(true)
					})
			})
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Procurar Estabelecimento',
		})
	}, [])

	return (
		<View style={styles.root}>
			<FlatList
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
				ListHeaderComponent={() => (
					<View style={{ width: '100%', alignItems: 'center' }}>
						<View style={{ height: 400, width: '100%' }}>
							<HTMLMapEmpresas onCoordsChange={setCoords} />
						</View>
						<SearchTextInput placeholder='Nome da empresa ou CNPJ' />
						<PrimaryButton
							isLoading={isLoading}
							title='Procurar'
							onPress={() => buscarEstabelecimentos()}
						/>
					</View>
				)}
				data={estabelecimentos}
				renderItem={itemData => {
					const attributes = itemData.item.attributes
					return (
						<View style={{ marginBottom: 10 }}>
							<Text>Nome: {attributes.name}</Text>
							<Text>Tipo: {attributes.TIPO_ESTAB}</Text>
						</View>
					)
				}}
				alwaysBounceVertical={false}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#fff',
	},
	title: {
		opacity: 0.5,
		fontWeight: '500',
		width: 300,
		textAlign: 'center',
		marginVertical: 10,
		fontSize: 18,
		color: COLORS.primary400,
	},
	continueContainer: {
		width: '100%',
		marginVertical: 20,
		alignItems: 'center',
	},
	legenda1: {
		height: 100,
		width: 100,
	},
	legenda2: {
		height: 100,
		width: 100,
	},
	elementContainer: {
		width: '100%',
		alignItems: 'flex-start',
	},
})

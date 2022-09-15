import { useLayoutEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../../constants/colors'
import { CovidMap } from '../../../components/maps/CovidMap'
import { SearchTextInput } from '../../../components/ui/textInputs/SearchTextInput'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'

interface Empresa {
	nome: string
	tipo: string
	status: string
	cpnj: string
}

const fakeEmpresa = [
	{
		nome: 'Bar do Jeremenias',
		tipo: 'Restaurante',
		status: 'Aprovado',
		cpnj: '01.234-567/8901-23',
	},
]

export function ProcurarEstabelecimentoScreen() {
	const navigation = useNavigation()
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	function buscarEstabelecimentos() {
		axios
			.get(
				'https://services3.arcgis.com/09SOnzI0u31UQEFZ/ArcGIS/rest/services/Estabelecimentos/FeatureServer/',
			)
			.then(res => {
				console.log(res.data)
			})
			.catch(err => {
				console.log(err)
			})
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
						<SearchTextInput placeholder='Nome da empresa ou CNPJ' />
						<PrimaryButton title='Procurar' onPress={() => buscarEstabelecimentos()} />
					</View>
				)}
				data={[0, 1, 2, 3]}
				renderItem={x => {
					return (
						<View>
							<Text>{x.item}</Text>
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

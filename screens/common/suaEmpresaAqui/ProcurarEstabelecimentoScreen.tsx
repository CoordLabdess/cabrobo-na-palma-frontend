import { useLayoutEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../../constants/colors'
import { CovidMap } from '../../../components/maps/CovidMap'
import { SearchTextInput } from '../../../components/ui/textInputs/SearchTextInput'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'

function header() {
	return (
		<View style={{ width: '100%', alignItems: 'center' }}>
			<SearchTextInput placeholder='Nome da empresa ou CNPJ' />
			<PrimaryButton title='Procurar' onPress={() => console.log('oi')} />
		</View>
	)
}

export function ProcurarEstabelecimentoScreen() {
	const navigation = useNavigation()
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	async function fetchData() {
		console.log('oi')
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
				ListHeaderComponent={header}
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

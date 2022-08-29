import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FormStepsBar } from '../../../components/form/FormStepsBar'
import { HTMLMap } from '../../../components/HTMLMap'
import { PrimaryButton } from '../../../components/ui/PrimaryButton'
import { COLORS } from '../../../constants/colors'
import { Coords } from '../../../types/global'
import { SolicitarServicoFormContext } from '../../../store/SolicitarServicosContext'
import { allMinorServices } from '../../../data/minorServices'
import { CadastrarEmpresaContext } from '../../../store/CadastrarEmpresaContext'

export function CadastrarEmpresaScreen1() {
	const navigation = useNavigation()
	const cadastrarEmpresaCtx = useContext(CadastrarEmpresaContext)
	const [error, setError] = useState(false)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Cadastrar Empresa'
		})
	}, [])

	return (
		<View style={styles.root}>
			<View style={{ marginVertical: 10, width: '100%', alignItems: 'center' }}>
				<FormStepsBar maxSteps={2} currentStep={1} />
			</View>
			<Text style={styles.title}>Selecione a localização da sua empresa.</Text>
			<View style={{ width: '100%', height: '60%' }}>
				<HTMLMap
					onCoordsChange={c =>
						cadastrarEmpresaCtx.updateData({ ...cadastrarEmpresaCtx.data, coords: c })
					}
				/>
			</View>
			{error && (
				<View style={{ marginTop: 15 }}>
					<Text style={{ color: 'red', fontSize: 14, fontWeight: '400' }}>
						Selecione um local no mapa
					</Text>
				</View>
			)}
			<View style={styles.continueContainer}>
				<PrimaryButton
					onPress={() => {
						if (cadastrarEmpresaCtx.data?.coords) {
							setError(false)
							navigation.navigate('cadastrarEmpresa2' as never)
						} else {
							setError(true)
						}
					}}
					title='Continuar'
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		opacity: 0.5,
		fontWeight: '500',
		width: 300,
		textAlign: 'center',
		marginBottom: 10,
		fontSize: 18,
		color: COLORS.primary400
	},
	continueContainer: {
		width: '100%',
		marginVertical: 20,
		alignItems: 'center'
	}
})

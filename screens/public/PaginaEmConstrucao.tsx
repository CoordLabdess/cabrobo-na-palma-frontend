import { ScrollView, Text, View, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import emConstrucaoColor from '../../assets/public/emConstrucaoColor.png'
import { PrimaryButton } from '../../components/ui/PrimaryButton'
import { COLORS } from '../../constants/colors'

export function PaginaEmConstrucao() {
	const navigation = useNavigation()

	return (
		<SafeAreaView style={styles.root} edges={['top', 'left', 'right']}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<View style={styles.elementContainer}>
					<Text style={styles.title}>Página em construção</Text>
				</View>
				<View style={styles.elementContainer}>
					<Image source={emConstrucaoColor} />
				</View>
				<View style={styles.elementContainer}>
					<Text style={styles.description}>
						Este serviço está em construção e estará disponível nas próximas atualizações
					</Text>
				</View>
				<View style={styles.elementContainer}>
					<PrimaryButton
						title='Voltar'
						style={{ paddingHorizontal: 40 }}
						textStyle={{ fontSize: 30 }}
						onPress={() => navigation.goBack()}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#fff'
	},
	scrollView: {
		width: '100%',
		height: '100%',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	elementContainer: {
		width: '80%',
		alignItems: 'center',
		marginBottom: 20
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		color: COLORS.primary500
	},
	description: {
		fontSize: 20,
		fontWeight: '500',
		color: COLORS.primary500,
		textAlign: 'center'
	}
})

import { ScrollView, View, Text, Linking, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../constants/colors'

export function NoticiasHomeScreen() {
	return (
		<SafeAreaView edges={['top', 'left', 'right']}>
			<ScrollView
				keyboardShouldPersistTaps='handled'
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'flex-start',
					paddingHorizontal: '5%',
					alignItems: 'center',
					paddingBottom: 20,
				}}
				alwaysBounceVertical={false}
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.title}>Notícias</Text>
				<Text style={styles.description}>
					Estamos trabalhando para simplificar o acesso às notícias pela plataforma. Enquanto essa
					funcionalidade ainda não está pronta, fique por dentro do que acontece em Cabrobó nas
					redes sociais:
				</Text>
				<View style={styles.elementContainer}>
					<Pressable
						style={styles.linkContainer}
						onPress={() => Linking.openURL('https://www.instagram.com/galegodenanai/?hl=pt-br')}
					>
						<Ionicons name='logo-instagram' color={COLORS.primary500} size={30} />
						<Text style={styles.linkText}>Galego de Nanai</Text>
						<Ionicons name='navigate-outline' color={COLORS.primary500} size={22} />
					</Pressable>
				</View>
				<View style={styles.elementContainer}>
					<Pressable
						style={styles.linkContainer}
						onPress={() => Linking.openURL('https://www.instagram.com/governocabrobo/?hl=pt-br')}
					>
						<Ionicons name='logo-instagram' color={COLORS.primary500} size={30} />
						<Text style={styles.linkText}>Governo de Cabrobó</Text>
						<Ionicons name='navigate-outline' color={COLORS.primary500} size={22} />
					</Pressable>
				</View>
				<View style={styles.elementContainer}>
					<Pressable
						style={styles.linkContainer}
						onPress={() => Linking.openURL('https://www.instagram.com/seduccabrobo/?hl=pt-br')}
					>
						<Ionicons name='logo-instagram' color={COLORS.primary500} size={30} />
						<Text style={styles.linkText}>Seduc Cabrobó</Text>
						<Ionicons name='navigate-outline' color={COLORS.primary500} size={22} />
					</Pressable>
				</View>
				<View style={styles.elementContainer}>
					<Pressable
						style={styles.linkContainer}
						onPress={() => Linking.openURL('https://www.instagram.com/saude_cabrobo/?hl=pt-br')}
					>
						<Ionicons name='logo-instagram' color={COLORS.primary500} size={30} />
						<Text style={styles.linkText}>Saúde Cabrobó</Text>
						<Ionicons name='navigate-outline' color={COLORS.primary500} size={22} />
					</Pressable>
				</View>
				<View style={styles.elementContainer}>
					<Pressable
						style={styles.linkContainer}
						onPress={() => Linking.openURL('https://www.instagram.com/infracabrobo/?hl=pt-br')}
					>
						<Ionicons name='logo-instagram' color={COLORS.primary500} size={30} />
						<Text style={styles.linkText}>Secretaria de Infraestrutura</Text>
						<Ionicons name='navigate-outline' color={COLORS.primary500} size={22} />
					</Pressable>
				</View>
				<View style={styles.elementContainer}>
					<Pressable
						style={styles.linkContainer}
						onPress={() => Linking.openURL('https://www.instagram.com/habitacaocabrobo/?hl=pt-br')}
					>
						<Ionicons name='logo-instagram' color={COLORS.primary500} size={30} />
						<Text style={styles.linkText}>Habitação Cabrobó</Text>
						<Ionicons name='navigate-outline' color={COLORS.primary500} size={22} />
					</Pressable>
				</View>
				<View style={styles.elementContainer}>
					<Pressable
						style={styles.linkContainer}
						onPress={() => Linking.openURL('https://www.instagram.com/sepladht/?hl=pt-br')}
					>
						<Ionicons name='logo-instagram' color={COLORS.primary500} size={30} />
						<Text style={styles.linkText}>Secretaria de Planejamento</Text>
						<Ionicons name='navigate-outline' color={COLORS.primary500} size={22} />
					</Pressable>
				</View>
				<View style={styles.elementContainer}>
					<Pressable
						style={styles.linkContainer}
						onPress={() => Linking.openURL('https://www.instagram.com/turismocabrobo/?hl=pt-br')}
					>
						<Ionicons name='logo-instagram' color={COLORS.primary500} size={30} />
						<Text style={styles.linkText}>Turismo Cabrobó</Text>
						<Ionicons name='navigate-outline' color={COLORS.primary500} size={22} />
					</Pressable>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		color: COLORS.primary500,
		fontWeight: '600',
		marginVertical: 30,
	},
	description: {
		textAlign: 'center',
		lineHeight: 25,
		fontSize: 18,
		color: COLORS.secondary500,
		marginBottom: 30,
	},
	elementContainer: {
		width: '100%',
		paddingHorizontal: '1%',
		alignItems: 'flex-start',
		marginBottom: 10,
	},
	linkContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	linkText: {
		fontSize: 18,
		fontWeight: '600',
		color: COLORS.primary500,
		marginHorizontal: 5,
	},
})

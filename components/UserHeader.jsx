import { View, Text, StyleSheet, Pressable, Image, Linking } from 'react-native'
import IonIcons from '@expo/vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useContext } from 'react'
import { Text as NBText } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../constants/colors'
import { AuthContext } from '../store/AuthContext'
import genericUserImg from '../assets/public/genericUser.png'

export function UserHeader() {
	const { logout, signed, user } = useContext(AuthContext)
	const navigation = useNavigation()
	const cpf = user?.cpf?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
	return (
		<View style={{ width: '100%' }}>
			<View style={styles.headerContainer}>
				{
					signed === 1 && (
						<Pressable style={styles.userInfoContainer}>
							<View style={styles.profileImageContainer}>
								<Image style={styles.profileImage} resizeMode='cover' source={genericUserImg} />
							</View>
							<View>
								<Text style={styles.userInfoName}>{user.nome}</Text>
								<Text style={styles.userInfoText}>Cidadão</Text>
								<Text style={styles.userInfoText}>{cpf}</Text>
							</View>
						</Pressable>
					)
					// : (
					// 	<Pressable style={styles.userInfoContainer}>
					// 		<NBText fontSize='lg'>
					// 			Faça seu
					// 			<NBText fontWeight={700} onPress={() => navigation.navigate('Login')}>
					// 				{' '}
					// 				login{' '}
					// 			</NBText>
					// 			ou
					// 			<NBText fontWeight={700} onPress={() => navigation.navigate('Signup')}>
					// 				{' '}
					// 				cadastre-se{' '}
					// 			</NBText>
					// 			agora!
					// 		</NBText>
					// 	</Pressable>
					// )
				}

				<View style={styles.fastLinksContainer}>
					<Pressable
						style={styles.linkContainer}
						onPress={() => {
							Linking.openURL('https://cabrobo.pe.gov.br/ouvidoria/')
						}}
					>
						<Text style={styles.linkText}>Ouvidoria</Text>
						<IonIcons name='headset-outline' size={32} color='#123A56' />
					</Pressable>
					{signed === 1 && (
						<Pressable
							style={styles.linkContainer}
							onPress={() => {
								logout()
							}}
						>
							<IonIcons name='exit-outline' size={32} color='#123A56' />
							<Text style={styles.linkText}>Sair</Text>
						</Pressable>
					)}
					<Pressable
						style={styles.linkContainer}
						onPress={() => {
							navigation.navigate('RequestsScreen')
						}}
					>
						<Text style={styles.linkText}>Solicitações</Text>
						<MaterialCommunityIcons
							name='clipboard-text-search-outline'
							size={32}
							color='#123A56'
						/>
					</Pressable>
				</View>
			</View>
			<Text style={styles.toolsGridTitle}>O que você precisa hoje?</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#fff',
		marginTop: 20,
		borderRadius: 8,
		overflow: 'hidden',
	},
	userInfoContainer: {
		padding: 20,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	profileImageContainer: {
		borderRadius: 500,
		overflow: 'hidden',
		marginRight: 30,
		backgroundColor: '#fff',
		height: 90,
		width: 90,
	},
	profileImage: {
		height: '100%',
		width: '100%',
	},
	userInfoName: {
		fontSize: 18,
		fontWeight: '600',
	},
	fastLinksContainer: {
		flexDirection: 'row',
		padding: 10,
		backgroundColor: '#ACB1C6',
		// flex: 1,
		justifyContent: 'space-between',
	},
	linkContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	linkText: {
		marginHorizontal: 10,
		fontWeight: '600',
		color: '#123A56',
	},
	toolsGridTitle: {
		color: COLORS.primary500,
		marginTop: 20,
		fontWeight: '600',
		fontSize: 15,
		width: '100%',
		marginLeft: 5,
		textAlign: 'left',
		marginBottom: 10,
	},
})

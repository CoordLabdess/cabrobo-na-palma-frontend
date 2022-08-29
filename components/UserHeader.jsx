import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import IonIcons from '@expo/vector-icons/Ionicons'
import { useContext } from 'react'
import { COLORS } from '../constants/colors'
import { AuthContext } from '../store/AuthContext'
import genericUserImg from '../assets/public/genericUser.png'

export function UserHeader() {
	const authCtx = useContext(AuthContext)
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.headerContainer}>
				<Pressable style={styles.userInfoContainer}>
					<View style={styles.profileImageContainer}>
						<Image style={styles.profileImage} resizeMode='cover' source={genericUserImg} />
					</View>
					<View>
						<Text style={styles.userInfoName}>Fulano da Silva</Text>
						<Text style={styles.userInfoText}>Cidadão</Text>
						<Text style={styles.userInfoText}>123.456.789-00</Text>
					</View>
				</Pressable>
				<View style={styles.fastLinksContainer}>
					<Pressable style={styles.linkContainer} onPress={() => {}}>
						<Text style={styles.linkText}>Solicitações</Text>
						<IonIcons name='document-text-outline' size={32} color='#123A56' />
					</Pressable>
					<Pressable
						style={styles.linkContainer}
						onPress={() => {
							authCtx.logout()
						}}
					>
						<IonIcons name='exit-outline' size={32} color='#123A56' />
						<Text style={styles.linkText}>Sair</Text>
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
		overflow: 'hidden'
	},
	userInfoContainer: {
		padding: 20,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	profileImageContainer: {
		borderRadius: 500,
		overflow: 'hidden',
		marginRight: 30,
		backgroundColor: '#fff',
		height: 90,
		width: 90
	},
	profileImage: {
		height: '100%',
		width: '100%'
	},
	userInfoName: {
		fontSize: 18,
		fontWeight: '600'
	},
	fastLinksContainer: {
		flexDirection: 'row',
		padding: 10,
		backgroundColor: '#ACB1C6',
		flex: 1,
		justifyContent: 'space-between'
	},
	linkContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	linkText: {
		marginHorizontal: 10,
		fontWeight: '600',
		color: '#123A56'
	},
	toolsGridTitle: {
		color: COLORS.primary500,
		marginTop: 20,
		fontWeight: '600',
		fontSize: 15,
		width: '100%',
		marginLeft: 5,
		textAlign: 'left',
		marginBottom: 10
	}
})

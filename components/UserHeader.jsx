import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import IonIcons from '@expo/vector-icons/Ionicons'

export function UserHeader() {
	return (
		<View>
			<View style={styles.headerContainer}>
				<Pressable
					style={styles.userInfoContainer}
					onPress={() => {
						console.log('Perfil')
					}}>
					<View style={styles.profileImageContainer}>
						<Image
							style={styles.profileImage}
							resizeMode='cover'
							source={{
								uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
							}}
						/>
					</View>
					<View>
						<Text style={styles.userInfoName}>Fulano da Silva</Text>
						<Text style={styles.userInfoText}>Civil</Text>
						<Text style={styles.userInfoText}>123.456.789-00</Text>
					</View>
				</Pressable>
				<View style={styles.fastLinksContainer}>
					<Pressable
						style={styles.linkContainer}
						onPress={() => {
							console.log('Ouvidoria')
						}}>
						<IonIcons
							name='headset-sharp'
							size={32}
							color='#123A56'
						/>
						<Text style={styles.linkText}>Ouvidoria</Text>
					</Pressable>
					<Pressable
						style={styles.linkContainer}
						onPress={() => {
							console.log('Solicitações')
						}}>
						<Text style={styles.linkText}>Solicitações</Text>
						<IonIcons
							name='notifications'
							size={32}
							color='#123A56'
						/>
					</Pressable>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	headerContainer: {
		backgroundColor: '#fff',
		borderRadius: 8,
		margin: 20,
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
		width: '100%',
		justifyContent: 'space-between',
	},
	linkContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	linkText: {
		marginHorizontal: 10,
		color: '#123A56',
	},
})

import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { Navigation } from './routers/Navigation'
import { AuthContextProvider } from './store/AuthContext'

export default function App() {
	return (
		<View
			style={{
				flex: 1
			}}
		>
			<AuthContextProvider>
				{Platform.OS === 'ios' ? (
					<KeyboardAvoidingView
						style={{ width: '100%', height: '100%' }}
						behavior='padding'
						keyboardVerticalOffset={0}
					>
						<Navigation />
					</KeyboardAvoidingView>
				) : (
					<Navigation />
				)}
			</AuthContextProvider>
		</View>
	)
}

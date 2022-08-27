import { View } from 'react-native'
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
				<Navigation />
			</AuthContextProvider>
		</View>
	)
}

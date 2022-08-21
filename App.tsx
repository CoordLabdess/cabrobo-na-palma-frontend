import { View } from 'react-native'
import { Navigation } from './routers/Navigation'

export default function App() {
	return (
		<View
			style={{
				flex: 1
			}}
		>
			<Navigation />
		</View>
	)
}

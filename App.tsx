import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Navigation } from './routers/Navigation'
import { AuthContextProvider } from './store/AuthContext'
import { RegisterEnterpriseContextProvider } from './store/CadastrarEmpresaContext'
import { ServiceRequestFormProvider } from './store/SolicitarServicosContext'

export default function App() {
	return (
		<SafeAreaProvider>
			<NativeBaseProvider>
				<AuthContextProvider>
					<ServiceRequestFormProvider>
						<RegisterEnterpriseContextProvider>
							<SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
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
							</SafeAreaView>
						</RegisterEnterpriseContextProvider>
					</ServiceRequestFormProvider>
				</AuthContextProvider>
			</NativeBaseProvider>
		</SafeAreaProvider>
	)
}

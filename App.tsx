import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'expo-status-bar'
import * as Location from 'expo-location'
import React, { useLayoutEffect } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Navigation } from './routers/Navigation'
import { AuthContextProvider } from './store/AuthContext'
import { RegisterEnterpriseContextProvider } from './store/CadastrarEmpresaContext'
import { ServiceRequestFormProvider } from './store/SolicitarServicosContext'
import { UserProvider } from './store/userContext'

export default function App() {
	return (
		<SafeAreaProvider>
			<NativeBaseProvider>
				<AuthContextProvider>
					<ServiceRequestFormProvider>
						<UserProvider>
							<RegisterEnterpriseContextProvider>
								<SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
									<StatusBar
										style={Platform.OS === 'android' ? 'dark' : 'light'}
										backgroundColor='#fff'
									/>

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
						</UserProvider>
					</ServiceRequestFormProvider>
				</AuthContextProvider>
			</NativeBaseProvider>
		</SafeAreaProvider>
	)
}

import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'

import { NavigationContainer } from '@react-navigation/native'
import { Loading } from './src/components/Loading'
import Routes from './src/routes'


export default function App() {
	const [fontsLoaded] = useFonts({
		Jost_400Regular,
		Jost_600SemiBold
	})

	if(!fontsLoaded) {
		return <Loading />
	} 

	return (
		<GestureHandlerRootView style={{flex: 1}}>
			<NavigationContainer>
				<StatusBar style='dark' backgroundColor='transparent' />
				<Routes />
			</NavigationContainer>
		</GestureHandlerRootView>
	)
}

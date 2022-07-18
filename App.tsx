import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'

import { NavigationContainer } from '@react-navigation/native'
import { Loading } from './src/screens/Loading'
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
		<NavigationContainer>
			<StatusBar style='dark' backgroundColor='transparent' />
			<Routes />
		</NavigationContainer>
	)
}

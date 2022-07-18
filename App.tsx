import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'

import { Welcome } from './src/screens/Welcome'
import { Loading } from './src/screens/Loading'

export default function App() {
	const [fontsLoaded] = useFonts({
		Jost_400Regular,
		Jost_600SemiBold
	})

	if(!fontsLoaded) {
		return <Loading />
	} 

	return (
		<>
			<StatusBar style='dark' backgroundColor='transparent' />
			<Welcome />
		</>
	)
}

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Welcome } from './src/screens/Welcome'

export default function App() {
	return (
		<>
			<StatusBar style='dark' backgroundColor='transparent' />
			<Welcome />
		</>
	)
}

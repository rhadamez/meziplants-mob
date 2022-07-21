import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import * as Notifications from 'expo-notifications'

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'

import { NavigationContainer } from '@react-navigation/native'
import { Loading } from './src/components/Loading'
import Routes from './src/routes'
import { PlantProps } from './src/libs/storage'

export default function App() {
	const [, setTemp] = useState<any>()
	const [fontsLoaded] = useFonts({
		Jost_400Regular,
		Jost_600SemiBold
	})

	useEffect(() => {
		const subscription = Notifications.addNotificationReceivedListener(
			async notification => {
				const data = notification.request.content.data.plant as PlantProps
				setTemp(data)
			})

		return () => subscription.remove()
	}, [])

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

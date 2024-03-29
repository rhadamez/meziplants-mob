import React, { useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../screens/Welcome'
import { UserIdentification } from '../screens/UserIdentification'
import { Confirmation } from '../screens/Confirmation'
import { PlantSave } from '../screens/PlantSave'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TabRoutes } from './tab.routes'


const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
	const navigation = useNavigation()

	useEffect(() => {
		async function loadUser() {
			const hasName = await AsyncStorage.getItem('@meziplants:name')
			if(hasName) navigation.navigate('PlantSelect')
			else navigation.navigate('Welcome')
		}

		loadUser()
	}, [])

	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='Welcome' component={Welcome} />
			<Screen name='UserIdentification' component={UserIdentification} />
			<Screen name='Confirmation' component={Confirmation} />
			<Screen name='PlantSelect' component={TabRoutes} />
			<Screen name='PlantSave' component={PlantSave} />
			<Screen name='MyPlants' component={TabRoutes} />
		</Navigator>
	)
}

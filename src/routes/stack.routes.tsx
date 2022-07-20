import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../screens/Welcome'
import { UserIdentification } from '../screens/UserIdentification'
import { Confirmation } from '../screens/Confirmation'
import { PlantSelect } from '../screens/PlantSelect'
import { PlantSave } from '../screens/PlantSave'


const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='Welcome' component={Welcome} />
			<Screen name='UserIdentification' component={UserIdentification} />
			<Screen name='Confirmation' component={Confirmation} />
			<Screen name='PlantSelect' component={PlantSelect} />
			<Screen name='PlantSave' component={PlantSave} />
		</Navigator>
	)
}

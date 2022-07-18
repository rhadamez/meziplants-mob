import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../screens/Welcome'
import { UserIdentification } from '../screens/UserIdentification'
import { Confirmation } from '../screens/Confirmation'

type NavigatorStackProps = {
  Welcome: undefined
  UserIdentification: undefined
  Confirmation: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<NavigatorStackProps>()

export function StackRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='Welcome' component={Welcome} />
			<Screen name='UserIdentification' component={UserIdentification} />
			<Screen name='Confirmation' component={Confirmation} />
		</Navigator>
	)
}

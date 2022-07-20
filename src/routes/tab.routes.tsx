import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialIcons } from '@expo/vector-icons'

import { PlantSelect } from '../screens/PlantSelect'
import { MyPlants } from '../screens/MyPlants'
import colors from '../styles/colors'


const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {

	return (
		<Navigator screenOptions={{
			headerShown: false,
			tabBarActiveTintColor: colors.green,
			tabBarInactiveTintColor: colors.heading,
			tabBarLabelPosition: 'beside-icon',
			tabBarStyle: {
				paddingVertical: 20,
				height: 88
			}
		}}>
			<Screen name='Nova Planta' component={PlantSelect} options={{
				tabBarIcon: (({ size, color }) => (
					<MaterialIcons name='add-circle-outline' size={size} color={color} />
				))
			}}/>
			<Screen name='Minhas Plantas' component={MyPlants} options={{
				tabBarIcon: (({ size, color }) => (
					<MaterialIcons name='format-list-bulleted' size={size} color={color} />
				))
			}}/>
		</Navigator>
	)
}

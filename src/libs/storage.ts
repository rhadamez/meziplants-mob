import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'

export interface PlantProps {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: string[],
  frequency: {
    times: number,
    repeat_every: string
  },
  hour: string
  dateTimeNotification: Date
}

export interface StoragePlantProps {
  [id: string]: {
    data: PlantProps
    notificationId: string
  }
}

export async function plantSave(plant: PlantProps): Promise<void> {
	try {
		const nextTime = new Date(plant.dateTimeNotification)
		const now = new Date()

		const { times, repeat_every } = plant.frequency
		if(repeat_every === 'week') {
			const interval = Math.trunc(7 / times)
			nextTime.setDate(now.getTime() + interval)
		}
		//else {
		// 	nextTime.setDate(nextTime.getTime() + 1)
		// }

		const seconds = Math.abs(Math.ceil(now.getTime() - nextTime.getTime()) / 1000)

		const notificationId = await Notifications.scheduleNotificationAsync({
			content: {
				title: 'Heeey 🌱',
				body: `Está na hora de cuidar da sua ${plant.name}`,
				sound: true,
				priority: Notifications.AndroidNotificationPriority.HIGH,
				data: {
					plant
				},
			},
			trigger: {
				seconds: seconds < 60 ? 60 : seconds,
				repeats: true
			}
		})

		const data = await AsyncStorage.getItem('@meziplants:plants')
		const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {}

		const newPlant = {
			[plant.id]: {
				data: plant,
				notificationId
			}
		}

		await AsyncStorage.setItem('@meziplants:plants', JSON.stringify({...newPlant, ...oldPlants}))
	} catch(err) {
		throw new Error(err)
	}
}

export async function loadPlants(): Promise<PlantProps[]> {
	const data = await AsyncStorage.getItem('@meziplants:plants')
	const plants = data ? (JSON.parse(data) as StoragePlantProps) : {}

	const plantsSorted = Object.keys(plants).map(plant => {
		return { ...plants[plant].data}
	})

	plantsSorted.sort((a, b) => {
		const dateA = Math.floor(new Date(a.dateTimeNotification).getTime() / 1000)
		const dateB = Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
		return dateA - dateB
	})

	return plantsSorted
}

export async function removePlant(id: string): Promise<void> {
	try {
		const plants = await loadPlants()
		await Notifications.cancelScheduledNotificationAsync(plants[id].notificationId)
		delete plants[id]
		await AsyncStorage.setItem('@meziplants:plants', JSON.stringify(plants))
	} catch(err) {
		console.log(err)
	}
}


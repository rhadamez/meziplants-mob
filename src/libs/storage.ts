import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'

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
  }
}

export async function plantSave(plant: PlantProps): Promise<void> {
	try {
		const data = await AsyncStorage.getItem('@meziplants:plants')
		const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {}

		const newPlant = {
			[plant.id]: {
				data: plant
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
		delete plants[id]
		await AsyncStorage.setItem('@meziplants:plants', JSON.stringify(plants))
	} catch(err) {
		console.log(err)
	}
}


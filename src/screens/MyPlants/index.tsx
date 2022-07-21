import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import waterdrop from '../../assets/waterdrop.png'
import { Header } from '../../components/Header'
import { loadPlants, PlantProps, removePlant } from '../../libs/storage'
import { PlantCardSecondary } from '../../components/PlantCardSecondary'
import { Loading } from '../../components/Loading'
import * as S from './styles'

export function MyPlants() {
	const [myPlants, setMyPlants] = useState<PlantProps[]>([])
	const [loading, setLoading] = useState(true)
	const [nextWaterd, setNextWaterd] = useState('')

	useEffect(() => {
		async function loadStorageData() {
			const plantsStoraged = await loadPlants()

			if(plantsStoraged.length > 0) {
				const nextTime = formatDistance(new Date(plantsStoraged[0].dateTimeNotification).getTime(), new Date(), { locale: ptBR })
				setNextWaterd(`Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`)
			}

			setMyPlants(plantsStoraged)
			setLoading(false)
		}

		loadStorageData()
	}, [])

	async function handleRemove(plant: PlantProps) {
		Alert.alert('Remover', `Deseja remover a planta ${plant.name}?`, [
			{
				text: 'Não 🙏',
				style: 'cancel'
			},
			{
				text: 'Sim 😬',
				onPress: async () => {
					try {
						await removePlant(plant.id)
						setMyPlants(oldPlants => oldPlants.filter(item => item.id !== plant.id))
					} catch(err) {
						console.log(err)
					}
				}
			}
		])
	}

	return (
		<S.Container>
			<Header />
			<S.Spotlight>
				<S.SpotlightImage source={waterdrop} />
				<S.SpotlightText>{nextWaterd}</S.SpotlightText>
			</S.Spotlight>

			<S.Plants>
				<S.PlantsTitle>Próximas regadas</S.PlantsTitle>
				{loading ? (
					<Loading />
				) : (
					<>
						{myPlants.length > 0 ? (
							<S.PlantsList
								data={myPlants}
								keyExtractor={(item) => item.id}
								renderItem={({ item }) => (
									<PlantCardSecondary data={item} handleRemove={() => handleRemove(item)}/>
								)}
								showsVerticalScrollIndicator={false} />
						) : (
							<S.NoPlants>Não há plantas</S.NoPlants>
						)}
					</>
				)}
			</S.Plants>


		</S.Container>
	)
}

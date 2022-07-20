import { useEffect, useState } from 'react'

import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import waterdrop from '../../assets/waterdrop.png'
import { Header } from '../../components/Header'
import { loadPlants, PlantProps } from '../../libs/storage'
import * as S from './styles'
import { PlantCardSecondary } from '../../components/PlantCardSecondary'

export function MyPlants() {
	const [myPlants, setMyPlants] = useState<PlantProps[]>([])
	const [loading, setLoading] = useState(true)
	const [nextWaterd, setNextWaterd] = useState('')

	useEffect(() => {
		async function loadStorageData() {
			const plantsStoraged = await loadPlants()

			const nextTime = formatDistance(new Date(plantsStoraged[0].dateTimeNotification).getTime(), new Date(), { locale: ptBR })
			setNextWaterd(`Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`)

			setMyPlants(plantsStoraged)
			setLoading(false)
		}

		loadStorageData()
	}, [])

	return (
		<S.Container>
			<Header />

			<S.Spotlight>
				<S.SpotlightImage source={waterdrop} />
				<S.SpotlightText>{nextWaterd}</S.SpotlightText>
			</S.Spotlight>

			<S.Plants>
				<S.PlantsTitle>Próximas regadas</S.PlantsTitle>
				<S.PlantsList
					data={myPlants}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<PlantCardSecondary data={item}/>
					)}
					showsVerticalScrollIndicator={false}
				/>
			</S.Plants>
		</S.Container>
	)
}

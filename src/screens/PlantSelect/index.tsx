import { useEffect, useState } from 'react'
import { EnvironmentButton } from '../../components/EnvironmentButton'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { PlantCardPrimary } from '../../components/PlantCardPrimary'
import api from '../../services/api'
import * as S from './styles'

export type EnvironmentProps = {
  key: string
  title: string
}

type PlantProps = {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: string[],
  frequency: {
    times: number,
    repeat_every: string
  }
}

export function PlantSelect() {
	const [environmentSelected, setEnvironmentSelected] = useState('all')
	const [environments, setEnvironments] = useState<EnvironmentProps[]>([])
	const [plants, setPlants] = useState<PlantProps[]>([])
	const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function fetchEnvironment() {
			try {
				const { data } = await api.get('plants_environments?_sort=title&_order=asc')
				setEnvironments([{key: 'all', title: 'Todos'}, ...data])
			}catch(err) {
				console.log(err)
			}
		}

		async function fetchPlants() {
			try {
				const { data } = await api.get('plants?_sort=name&_order=asc')
				setPlants(data)
				setFilteredPlants(data)
				setIsLoading(false)
			} catch (err) {
				console.log(err)
			}
		}

		fetchEnvironment()
		fetchPlants()
	}, [])

	function handleEnvironmentSelected(environment: string) {
		setEnvironmentSelected(environment)

		if(environment === 'all') return setFilteredPlants(plants)

		const filtered = plants.filter(plant => plant.environments.includes(environment))

		setFilteredPlants(filtered)
	}

	if(isLoading) return <Loading />

	return (
		<S.Container>
			<S.Header>
				<Header />
				<S.Title>
          Em qual ambiente
				</S.Title>
				<S.Subtitle>
          você quer colocar sua planta?
				</S.Subtitle>
			</S.Header>
			<S.ListContainer>
				<S.EnvironmentList
					style={{ marginHorizontal: 10 }}
					horizontal
					showsHorizontalScrollIndicator={false}
					data={environments}
					keyExtractor={(item: any) => item.key}
					renderItem={({ item }) => (
						<EnvironmentButton
							title={item.title}
							active={item.key === environmentSelected}
							onPress={() => handleEnvironmentSelected(item.key)}
						/>
					)}
					contentContainerStyle={{ paddingHorizontal: 0 }}
				/>
			</S.ListContainer>
			<S.PlantsContainer>
				<S.Plants
					data={filteredPlants}
					keyExtractor={(item: any) => item.id}
					renderItem={({ item }) => (
						<PlantCardPrimary data={item} />
					)}
					numColumns={2}
				/>
			</S.PlantsContainer>
		</S.Container>
	)
}

import { EnvironmentButton } from '../../components/EnvironmentButton'
import { Header } from '../../components/Header'
import * as S from './styles'

export type EnvironmentProp = {
  name: string
}

export function PlantSelect() {
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
					style={{marginHorizontal: 20}}
					horizontal
					showsHorizontalScrollIndicator={false}
					data={[{name: '1'},{name: '2'},{name: '3'},{name: '4'}]}
					keyExtractor={(item: any) => item.id}
					renderItem={({ item }) => (
						<EnvironmentButton title='Cozinha' active={true} />
					)}
					contentContainerStyle={{ paddingHorizontal: 24 }}
				/>
			</S.ListContainer>
		</S.Container>
	)
}

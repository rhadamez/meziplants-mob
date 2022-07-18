import { Header } from '../../components/Header'
import * as S from './styles'

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
		</S.Container>
	)
}

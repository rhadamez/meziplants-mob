import watering from '../../assets/watering.png'
import { Button } from '../../components/Button'

import * as S from './styles'

export function Welcome() {
	return (
		<S.Container>
			<S.Title>Gerencie{'\n'}suas plantas{'\n'}de forma fácil</S.Title>
			<S.Image source={watering} />
			<S.DescriptionContainer>
				<S.Description>Não esqueça mais de regar suas plantas.</S.Description>
				<S.Description>Nós cuidamos de lembrar você sempre que precisar.</S.Description>
			</S.DescriptionContainer>
			<Button title='>' />
		</S.Container>
	)
}

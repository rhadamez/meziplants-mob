import { Feather } from '@expo/vector-icons'
import watering from '../../assets/watering.png'

import * as S from './styles'

export function Welcome() {
	return (
		<S.Container>
			<S.Title>Gerencie{'\n'}suas plantas de{'\n'}forma fácil</S.Title>
			<S.Image source={watering} />
			<S.DescriptionContainer>
				<S.Description>Não esqueça mais de regar suas plantas.</S.Description>
				<S.Description>Nós cuidamos de lembrar você sempre que precisar.</S.Description>
			</S.DescriptionContainer>
			<S.ButtonContainer>
				<Feather name='chevron-right' size={20} color='#fff'/>
			</S.ButtonContainer>
		</S.Container>
	)
}

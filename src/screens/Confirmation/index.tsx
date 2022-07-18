import { useNavigation } from '@react-navigation/native'
import { Button } from '../../components/Button'

import * as S from './styles'

export function Confirmation() {
	const navigation = useNavigation()

	return (
		<S.Container>
			<S.Header>
				<S.Emoji>😃</S.Emoji>
				<S.Title>Prontinho</S.Title>
				<S.Description>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</S.Description>
			</S.Header>
			<S.Footer>
				<Button title='Confirmar' onPress={() => navigation.navigate('PlantSelect')}/>
			</S.Footer>
		</S.Container>
	)
}

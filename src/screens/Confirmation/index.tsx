import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '../../components/Button'

import * as S from './styles'

interface Params {
  title: string
  subtitle: string
  buttonTitle: string
  icon: 'smile' | 'hug',
  nextScreen: any
}

const emojis = {
	hug: '🤗',
	smile: '😃'
}

export function Confirmation() {
	const route = useRoute()
	const screenOptions = route.params as Params
	const navigation = useNavigation()

	return (
		<S.Container>
			<S.Header>
				<S.Emoji>{emojis[screenOptions.icon]}</S.Emoji>
				<S.Title>{screenOptions.title}</S.Title>
				<S.Description>{screenOptions.subtitle}</S.Description>
			</S.Header>
			<S.Footer>
				<Button title={screenOptions.buttonTitle} onPress={() => navigation.navigate(screenOptions.nextScreen)}/>
			</S.Footer>
		</S.Container>
	)
}

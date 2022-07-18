import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Keyboard } from 'react-native'
import { Button } from '../../components/Button'
import * as S from './styles'

export function UserIdentification() {
	const [name, setName] = useState('')
	const navigation = useNavigation()

	return (
		<S.KeyboardView behavior={{ ios: 'padding' }} style={{ flex: 1 }}>
			<S.Touchable onPress={Keyboard.dismiss}>
				<S.Container>
					<S.Content>
						<S.Form>
							<S.Header>
								<S.Title>Como podemos{'\n'}chamar você?</S.Title>
								<S.Emoji>{name.length > 0 ? '😃' : '🙂' }</S.Emoji>
								<S.Input
									value={name}
									onChangeText={(text: string) => setName(text)}
									placeholder='Digite um nome'/>
							</S.Header>
							<S.Footer>
								<Button title='Confirmar' onPress={() => navigation.navigate('Confirmation', { name })} />
							</S.Footer>
						</S.Form>
					</S.Content>
				</S.Container>
			</S.Touchable>
		</S.KeyboardView>
	)
}

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Alert, Keyboard } from 'react-native'
import { Button } from '../../components/Button'
import * as S from './styles'

export function UserIdentification() {
	const [name, setName] = useState('')
	const navigation = useNavigation()

	async function handleSubmitName() {
		if (!name) return Alert.alert('Me diz como chamar você 😉')

		await AsyncStorage.setItem('@meziplants:name', name)

		navigation.navigate('Confirmation', { name })
	}

	return (
		<S.KeyboardView behavior={{ ios: 'padding' }} style={{ flex: 1 }}>
			<S.Touchable onPress={Keyboard.dismiss}>
				<S.Container>
					<S.Content>
						<S.Form>
							<S.Header>
								<S.Title>Como podemos{'\n'}chamar você?</S.Title>
								<S.Emoji>{name.length > 0 ? '😃' : '🙂'}</S.Emoji>
								<S.Input
									value={name}
									onChangeText={(text: string) => setName(text)}
									placeholder='Digite um nome' />
							</S.Header>
							<S.Footer>
								<Button title='Confirmar' onPress={handleSubmitName} />
							</S.Footer>
						</S.Form>
					</S.Content>
				</S.Container>
			</S.Touchable>
		</S.KeyboardView>
	)
}

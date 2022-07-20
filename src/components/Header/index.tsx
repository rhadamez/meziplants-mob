import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

import * as S from './styles'

export function Header() {
	const [name, setName] = useState('')

	useEffect(() => {
		async function loadName() {
			const nameExists = await AsyncStorage.getItem('@meziplants:name')
			if(nameExists) setName(nameExists)
		}

		loadName()
	}, [])

	return (
		<S.Container>
			<S.ProfileName>
				<S.Greeting>Olá,</S.Greeting>
				<S.Username>{name}</S.Username>
			</S.ProfileName>

			<S.Avatar source={{ uri: 'https://github.com/rhadamez.png'}}/>
		</S.Container>
	)
}

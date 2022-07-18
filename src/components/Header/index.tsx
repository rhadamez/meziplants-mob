import * as S from './styles'

export function Header() {
	return (
		<S.Container>
			<S.ProfileName>
				<S.Greeting>Olá</S.Greeting>
				<S.Username>Rhadamez</S.Username>
			</S.ProfileName>

			<S.Avatar source={{ uri: 'https://github.com/rhadamez.png'}}/>
		</S.Container>
	)
}

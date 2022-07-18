import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({title, ...rest}: Props) {
	return (
		<S.Container{...rest}>
			<S.Text>{title}</S.Text>
		</S.Container>
	)
}

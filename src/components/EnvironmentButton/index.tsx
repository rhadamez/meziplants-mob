import { RectButtonProps } from 'react-native-gesture-handler'

import * as S from './styles'

type Props = RectButtonProps & {
  title: string
  active?: boolean
}

export function EnvironmentButton({ title, active, ...rest }: Props) {
	return (
		<S.Container active={active} {...rest}>
			<S.Title active={active}>{title}</S.Title>
		</S.Container>
	)
}

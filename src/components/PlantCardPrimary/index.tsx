import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import * as S from './styles'

interface PlantProps extends RectButtonProps {
  data: {
    name: string
    photo: string
  }
}

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
	return (
		<S.Container {...rest}>
			<SvgFromUri uri={data.photo} width={70} height={70} />
			<S.Name>
				{data.name}
			</S.Name>
		</S.Container>
	)
}

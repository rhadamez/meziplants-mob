import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import * as S from './styles'

interface PlantProps extends RectButtonProps {
  data: {
    name: string
    photo: string
    hour: string
  }
}

export function PlantCardSecondary({ data, ...rest }: PlantProps) {
	return (
		<S.Container {...rest}>
			<SvgFromUri uri={data.photo} width={50} height={50} />

			<S.Name>
				{data.name}
			</S.Name>

			<S.Details>
				<S.TimeLabel>Regar às</S.TimeLabel>
				<S.Time>{data.hour}</S.Time>
			</S.Details>
		</S.Container>
	)
}

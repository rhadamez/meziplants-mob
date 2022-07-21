import { Animated } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'
import { Feather } from '@expo/vector-icons'

import * as S from './styles'
import colors from '../../styles/colors'

interface PlantProps extends RectButtonProps {
  data: {
    name: string
    photo: string
    hour: string
  }
}

export function PlantCardSecondary({ data, ...rest }: PlantProps) {
	return (
		<S.ContainerSwap
			overshootRight={false}
			renderRightActions={() => (
				<Animated.View>
					<S.ButtonRemoveContainer>
						<S.ButtonRemove>
							<Feather name='trash' size={32} color={colors.white}/>
						</S.ButtonRemove>
					</S.ButtonRemoveContainer>
				</Animated.View>
			)}>
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
		</S.ContainerSwap>
	)
}

import { useRoute } from '@react-navigation/native'
import { SvgFromUri } from 'react-native-svg'
import waterdrop from '../../assets/waterdrop.png'
import { Button } from '../../components/Button'
import * as S from './styles'

type PlantProps = {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: string[],
  frequency: {
    times: number,
    repeat_every: string
  }
}

export function PlantSave() {
	const route = useRoute()
	const { plant } = route.params as { plant: PlantProps }

	return (
		<S.Container>
			<S.PlantInfo>
				<SvgFromUri uri={plant.photo} height={150} width={150}/>
				<S.PlantName>{plant.name}</S.PlantName>
				<S.PlantDescription>
					{plant.about}
				</S.PlantDescription>
			</S.PlantInfo>

			<S.Controller>
				<S.TipController>
					<S.Image source={waterdrop} />
					<S.TipText>{plant.water_tips}</S.TipText>
				</S.TipController>
				<S.AlertLabel>
          Escolha o melhor horário para ser lembrado
				</S.AlertLabel>
				<Button title='Cadastrar Planta'/>
			</S.Controller>
		</S.Container>
	)
}

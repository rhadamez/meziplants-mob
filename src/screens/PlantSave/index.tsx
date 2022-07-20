import { useRoute } from '@react-navigation/native'
import { SvgFromUri } from 'react-native-svg'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { isBefore, format } from 'date-fns'
import waterdrop from '../../assets/waterdrop.png'
import { Button } from '../../components/Button'
import * as S from './styles'
import { useState } from 'react'
import { Alert, Platform } from 'react-native'

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

	const [selectedDateTime, setSelectedDateTime] = useState(new Date())
	const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios' ? true : false)

	function handleChangeTime(event: DateTimePickerEvent, dateTime: Date | undefined) {
		if(Platform.OS === 'android') {
			setShowDatePicker(oldState => !oldState)
		}

		if(dateTime && isBefore(dateTime, new Date())) {
			setSelectedDateTime(new Date())
			return Alert.alert('Escolha uma hora no futuro ⏰')
		}

		if(dateTime) setSelectedDateTime(dateTime)
	}

	function handleOpenDatetimePickerForAndroid() {
		setShowDatePicker(oldState => !oldState)
	}

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

				{showDatePicker && (
					<DateTimePicker
						value={selectedDateTime}
						mode='time'
						display='default'
						onChange={(event, dateTime) => handleChangeTime(event, dateTime)} />
				)}

				{ Platform.OS === 'android' && (
					<S.DateTimePickerContainer onPress={handleOpenDatetimePickerForAndroid}>
						<S.DateTimePickerText>{`Mudar ${format(selectedDateTime, 'HH:mm')}`}</S.DateTimePickerText>
					</S.DateTimePickerContainer>
				)}

				<Button title='Cadastrar Planta'/>
			</S.Controller>
		</S.Container>
	)
}

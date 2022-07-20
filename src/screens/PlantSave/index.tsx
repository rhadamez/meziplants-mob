import { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SvgFromUri } from 'react-native-svg'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { isBefore, format } from 'date-fns'
import waterdrop from '../../assets/waterdrop.png'
import { Button } from '../../components/Button'
import * as S from './styles'
import { Alert, Platform } from 'react-native'
import { loadPlants, PlantProps, plantSave } from '../../libs/storage'

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

	async function handleSave() {
		try {
			await plantSave({
				...plant,
				dateTimeNotification: selectedDateTime
			})
		} catch(err) {
			Alert.alert('Não foi possível salvar 🙃')
		}
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

				<Button title='Cadastrar Planta' onPress={handleSave} />
			</S.Controller>
		</S.Container>
	)
}

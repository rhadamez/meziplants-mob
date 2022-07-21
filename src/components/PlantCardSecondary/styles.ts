import styled from 'styled-components/native'
import { RectButton, Swipeable } from 'react-native-gesture-handler'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const ContainerSwap = styled<any>(Swipeable)``

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  margin: 5px 0;
`

export const Name = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${fonts.heading};
  font-size: 17px;
  color: ${colors.heading};
`

export const Details = styled.View`
  align-items: flex-end;
`

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`

export const ButtonRemoveContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ButtonRemove = styled<any>(RectButton)`
  width: 100px;
  height: 85px;
  margin: 15px 0;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 10px;
  background-color: ${colors.red};
`

import styled from 'styled-components/native'
import { ScrollView, ScrollViewProps } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Scroll = styled<ScrollViewProps | any>(ScrollView).attrs({
	showsVerticalScrollIndicator: false
})``

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.shape};
`

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;

  background-color: ${colors.shape};
`

export const PlantName = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;
`

export const PlantDescription = styled.Text`
  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.heading};
  font-size: 17px;
  margin-top: 10px;
`

export const Controller = styled.View`
  padding: 20px;
  padding-bottom: ${getBottomSpace() || 20}px;

  background-color: ${colors.white};
`

export const TipController = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`

export const Image = styled.Image`
  width: 56px;
  height: 56px;
  margin-right: 10px;
`

export const TipText = styled.Text`
  flex: 1;
  font-family: ${fonts.text};
  color: ${colors.blue};
  font-size: 17px;
  text-align: justify;
`

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  font-size: 12px;
  margin: 15px;
`

export const DateTimePickerContainer = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`

export const DateTimePickerText = styled.Text`
  color: ${colors.heading};
  font-size: 24px;
  font-family: ${fonts.text};
`

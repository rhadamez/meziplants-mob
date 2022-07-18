import { Platform, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${Platform.OS === 'ios' ? getBottomSpace() : '30'}px;
  background-color: ${colors.background};
`

export const Image = styled.Image.attrs({
	resizeMode: 'contain'
})`
  height: ${Dimensions.get('window').width * 0.7}px;
`

export const Title = styled.Text`
  margin-top: 38px;
  text-align: center;

  font-size: 32px;
  color: ${colors.heading};
  font-weight: 500;
  font-family: ${fonts.heading};
`

export const DescriptionContainer = styled.View`
  width: 100%;
  flex-direction: column;
`

export const Description = styled.Text`
  padding: 0 20px;
  text-align: center;

  font-size: 18px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`

export const ButtonContainer = styled.TouchableOpacity`
  height: 50px;
  min-width: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: ${colors.green};
`

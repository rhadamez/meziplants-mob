import { Platform } from 'react-native'
import styled from 'styled-components/native'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import colors from '../../styles/colors'

export const Container = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${Platform.OS === 'ios' ? getBottomSpace() : '30'}px;
  background-color: ${colors.background};
`

export const Image = styled.Image`
  width: 292px;
  height: 284px;
`

export const Title = styled.Text`
  margin-top: 38px;
  text-align: center;

  font-size: 32px;
  color: ${colors.heading};
  font-weight: 500;
`

export const DescriptionContainer = styled.View`
  width: 100%;
  flex-direction: column;
`

export const Description = styled.Text`
  padding: 0 20px;
  text-align: center;

  font-size: 17px;
  color: ${colors.heading};
`

export const NextButton = styled.TouchableOpacity`

`

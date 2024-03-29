import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight()}px;
`

export const ProfileName = styled.View`
`

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`

export const Username = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
  line-height: 40px;
`

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;

  border-radius: 35px;
`

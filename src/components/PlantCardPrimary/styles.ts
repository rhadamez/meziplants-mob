import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${colors.shape};
  border-radius: 20px;
  padding: 0 10px;
  align-items: center;
  margin: 10px;
`

export const Name = styled.Text`
  margin: 16px 0;
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
`

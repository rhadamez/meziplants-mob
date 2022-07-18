import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.TouchableOpacity`
  height: 56px;
  width: 100%;
  min-width: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  background-color: ${colors.green};
`

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.heading};
`

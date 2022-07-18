import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.TouchableOpacity`
  height: 50px;
  min-width: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: ${colors.green};
`

export const Text = styled.Text`
  color: #fff;
  font-size: 26px;
`

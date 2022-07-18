import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`

export const Header = styled.View`
  padding: 30px;
`

export const Title = styled.Text`
  margin-top: 15px;

  line-height: 20px;
  font-size: 17px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
`

export const Subtitle = styled.Text`
  line-height: 20px;
  font-size: 17px;
  font-family: ${fonts.text};
  color: ${colors.heading};
`

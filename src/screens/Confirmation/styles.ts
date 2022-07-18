import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  margin-top: 20px;

  font-size: 22px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 42px;
`

export const Description = styled.Text`
  padding: 0 20px;
  text-align: center;

  font-size: 18px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`

export const Emoji = styled.Text`
  font-size: 44px;
`

export const Footer = styled.View`
  width: 100%;
  margin-top: 20px;
  padding: 0 75px;
`

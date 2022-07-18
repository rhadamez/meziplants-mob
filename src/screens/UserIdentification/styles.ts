import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`

export const KeyboardView = styled.KeyboardAvoidingView.attrs({
	contentContainerStyle: { flex: 1 }
})`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`

export const Touchable = styled.TouchableWithoutFeedback`

`

export const Content = styled.View`
  flex: 1;
  width: 100%;
`

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 54px;
  align-items: center;
`

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 42px;
  margin-top: 20px;
`

export const Emoji = styled.Text`
  font-size: 44px;
`

export const Input = styled.TextInput`
  padding: 10px;
  width: 100%;
  margin-top: 50px;

  border-bottom-width: 1px;
  border-color: ${colors.gray};
  color: ${colors.heading};
  font-size: 18px;
  text-align: center;
`

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`

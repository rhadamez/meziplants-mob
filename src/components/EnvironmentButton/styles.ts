import styled, { css } from 'styled-components/native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

type ContainerProps = RectButtonProps & {
  active?: boolean
}

type TitleProps = {
  active?: boolean
}

export const Container = styled<ContainerProps | any>(RectButton)`
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  border-radius: 12px;
  background-color: ${colors.shape};

  ${({ active }) => active && css`
    color: ${colors.green};
    font-family: ${fonts.heading};
    background-color: ${colors.green_light};
  `}
`

export const Title = styled.Text<TitleProps>`
  color: ${colors.heading};
  font-family: ${fonts.heading};

  ${({ active }) => active && css`
    color: ${colors.green_dark};
  `}
`

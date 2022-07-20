import { FlatList } from 'react-native'
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

export const ListContainer = styled.View``

export const EnvironmentList = styled<any>(FlatList).attrs({
	showsHorizontalScrollIndicator: false
})``

export const PlantsContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`

export const Plants = styled<any>(FlatList).attrs({
})``

export const Spinner = styled.ActivityIndicator``

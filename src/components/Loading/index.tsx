import LottieView from 'lottie-react-native'

import loadAnimation from '../../assets/load.json'

import * as S from './styles'

export function Loading() {
	return (
		<S.Container>
			<LottieView source={loadAnimation} autoPlay loop style={{backgroundColor: 'transparent', width: 200, height: 200}}/>
		</S.Container>
	)
}

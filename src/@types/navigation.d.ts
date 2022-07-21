import { PlantProps } from '../libs/storage'

interface Params {
  title: string
  subtitle: string
  buttonTitle: string
  icon: 'smile' | 'hug',
  nextScreen: any
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined
      UserIdentification: undefined
      Confirmation: Params
      PlantSelect: undefined
      PlantSave: { plant: PlantProps } | undefined
      MyPlants: undefined
    }
  }
}

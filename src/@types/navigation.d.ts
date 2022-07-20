type PlantProps = {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: string[],
  frequency: {
    times: number,
    repeat_every: string
  }
}

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

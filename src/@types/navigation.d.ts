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

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined
      UserIdentification: undefined
      Confirmation: { name: string }
      PlantSelect: undefined
      PlantSave: { plant: PlantProps } | undefined
    }
  }
}

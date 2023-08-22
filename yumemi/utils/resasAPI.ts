interface ResasPrefectureResult {
  message: String
  result: Array<{
    prefCode: Number
    prefName: String
  }>
}

interface ResasPopulation {
  label: String
  data: Array<{
    year: Number
    value: Number
  }>
}

interface ResasPopulationResult {
  message: String
  result: {
    boundaryYear: Number
    data: ResasPopulation[]
  }
}

interface Prefecture {
  key: Number
  name: String
  isChecked: Boolean
}

interface PopulationsOfPrefecture {
  total: Number[]
  young: Number[]
  working: Number[]
  old: Number[]
}

interface ChartPopulation {
  name: String
  data: Number[]
}

interface ChartPopulationsOfPrefecture {
  name: String
  data: {
    total: ChartPopulation
    young: ChartPopulation
    working: ChartPopulation
    old: ChartPopulation
  }
}

const resasRes2PopulationArray = (result: ResasPopulation): Number[] => {
  const list: Number[] = []
  for (const data of result.data) {
    list.push(data.value)
  }
  return list.concat()
}

const fetchPrefectures = async (): Promise<Prefecture[]> => {
  const prefectures = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-API-KEY': useRuntimeConfig().public.apiKey,
      },
    }
  ).then(async (response) => {
    const resJson: ResasPrefectureResult = await response.json()
    const list: Prefecture[] = []
    resJson.result.forEach((value) => {
      list.push({
        key: value.prefCode,
        name: value.prefName,
        isChecked: false,
      })
    })
    return list.concat()
  })
  return prefectures
}

const fetchPeople = async (
  prefectures: Prefecture[]
): Promise<ChartPopulationsOfPrefecture[]> => {
  const returnObject: ChartPopulationsOfPrefecture[] = []

  for (const prefecture of prefectures) {
    const populations: PopulationsOfPrefecture = await fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefecture.key}&cityCode=-`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'X-API-KEY': useRuntimeConfig().public.apiKey,
        },
      }
    ).then(async (response) => {
      const resJson: ResasPopulationResult = await response.json()
      return {
        total: resasRes2PopulationArray(resJson.result.data[0]),
        young: resasRes2PopulationArray(resJson.result.data[1]),
        working: resasRes2PopulationArray(resJson.result.data[2]),
        old: resasRes2PopulationArray(resJson.result.data[3]),
      }
    })

    returnObject.push({
      name: prefecture.name,
      data: {
        total: {
          name: prefecture.name,
          data: populations.total,
        },
        young: {
          name: prefecture.name,
          data: populations.young,
        },
        working: {
          name: prefecture.name,
          data: populations.working,
        },
        old: {
          name: prefecture.name,
          data: populations.old,
        },
      },
    })
  }
  return returnObject.concat()
}

export {
  ResasPrefectureResult,
  ResasPopulation,
  ResasPopulationResult,
  Prefecture,
  PopulationsOfPrefecture,
  ChartPopulation,
  ChartPopulationsOfPrefecture,
  fetchPrefectures,
  fetchPeople,
  resasRes2PopulationArray,
}

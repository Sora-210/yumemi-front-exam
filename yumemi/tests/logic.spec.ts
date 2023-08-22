import { describe, expect, test } from 'vitest'
import { useApp } from '../composables/useApp'
import {
  ResasPopulation,
  ChartPopulation,
  resasRes2PopulationArray,
} from '../utils/resasAPI'

describe('resasAPI', () => {
  test('取得オブジェクトが正しく変換される(method)', () => {
    const result: ResasPopulation = {
      label: 'l1',
      data: [
        {
          year: 1,
          value: 1,
        },
        {
          year: 1,
          value: 2,
        },
      ],
    }
    const popArray: Number[] = resasRes2PopulationArray(result)

    expect(popArray).toStrictEqual([1, 2])
  })
})

describe('useApp', () => {
  test('選択されているデータのみフィルターされる(method)', () => {
    const { dataFilter } = useApp()
    const data: ChartPopulation[] = [
      {
        name: 'a',
        data: [1, 2, 3, 4, 5],
      },
      {
        name: 'b',
        data: [6, 7, 8, 9, 0],
      },
      {
        name: 'c',
        data: [1, 3, 5, 7, 9],
      },
    ]
    const filter: string[] = ['b']

    const filteredData = dataFilter(data, filter)
    expect(filteredData.map((v) => v.name)).toStrictEqual(filter)
  })

  test('有効都道府県が文字列配列に正しく変換される(computed)', () => {
    const { prefectures, activePrefectures } = useApp()
    expect(activePrefectures.value).toStrictEqual([])

    prefectures.value = [
      {
        key: 1,
        name: 'test1',
        isChecked: false,
      },
      {
        key: 2,
        name: 'test2',
        isChecked: false,
      },
    ]
    expect(activePrefectures.value).toStrictEqual([])

    prefectures.value[1].isChecked = true
    expect(activePrefectures.value).toStrictEqual(['test2'])
  })

  test('グラフオプジョンデータが正しく生成される', () => {})
})

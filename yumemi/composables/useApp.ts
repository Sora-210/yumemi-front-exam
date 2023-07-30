import { ref, reactive, computed, onMounted } from 'vue'
import { XAxisOptions, YAxisOptions } from 'highcharts'
import { useTab } from '../composables/useTab'
import { useLoading } from '../composables/useLoading'
import {
  fetchPrefectures,
  fetchPeople,
  Prefecture,
  ChartPopulation,
} from '../utils/resasAPI'

interface ChartOption {
  title: {
    text: String
  }
  xAxis: XAxisOptions
  yAxis: YAxisOptions
  series: ChartPopulation[]
}

const Axis: {
  xAxis: XAxisOptions
  yAxis: YAxisOptions
} = {
  xAxis: {
    title: {
      text: '年',
    },
    categories: [
      '1960',
      '1965',
      '1970',
      '1975',
      '1980',
      '1985',
      '1990',
      '1995',
      '2000',
      '2005',
      '2010',
      '2015',
      '2020',
      '2025',
      '2030',
      '2035',
      '2040',
      '2045',
    ],
  },
  yAxis: {
    title: {
      text: '人数',
    },
    labels: {
      format: '{value}',
    },
  },
}

export const useApp = () => {
  const { tabList, activeTab } = useTab()
  const { isLoading, loadingMessage } = useLoading()

  const prefectures = ref<Prefecture[]>([])

  const activePrefectures = computed<String[]>(() => {
    const list = []
    for (const v of prefectures.value) {
      if (v.isChecked) {
        list.push(v.name)
      }
    }
    return list
  })

  const data = reactive<{
    prefectures: String[]
    total: ChartPopulation[]
    young: ChartPopulation[]
    working: ChartPopulation[]
    old: ChartPopulation[]
  }>({
    prefectures: [],
    total: [],
    young: [],
    working: [],
    old: [],
  })

  const chartOptions = reactive<{
    total: ChartOption
    young: ChartOption
    working: ChartOption
    old: ChartOption
  }>({
    total: {
      title: {
        text: '総人口',
      },
      ...Axis,
      series: [],
    },
    young: {
      title: {
        text: '年少人口',
      },
      ...Axis,
      series: [],
    },
    working: {
      title: {
        text: '生産年齢人口',
      },
      ...Axis,
      series: [],
    },
    old: {
      title: {
        text: '老年人口',
      },
      ...Axis,
      series: [],
    },
  })

  const dataFilter = (
    data: ChartPopulation[],
    filter: String[]
  ): ChartPopulation[] => {
    const list = []
    for (const d of data) {
      if (filter.includes(d.name)) {
        list.push({
          name: d.name,
          data: d.data.concat(),
        })
      }
    }
    return list
  }

  const updateGragh = async () => {
    const notPrefectures = prefectures.value.filter(
      (v) => v.isChecked && !data.prefectures.includes(v.name)
    )
    if (notPrefectures.length) {
      isLoading.value = true
      const response = await fetchPeople(notPrefectures)
      for (const row of response) {
        data.prefectures.push(row.name)
        data.total.push(row.data.total)
        data.young.push(row.data.young)
        data.working.push(row.data.working)
        data.old.push(row.data.old)
      }
      isLoading.value = false
    }

    chartOptions.total.series = dataFilter(
      data.total.concat(),
      activePrefectures.value
    )
    chartOptions.young.series = dataFilter(
      data.young.concat(),
      activePrefectures.value
    )
    chartOptions.working.series = dataFilter(
      data.working.concat(),
      activePrefectures.value
    )
    chartOptions.old.series = dataFilter(
      data.old.concat(),
      activePrefectures.value
    )
  }

  onMounted(async () => {
    prefectures.value = await fetchPrefectures()
    isLoading.value = false
  })

  return {
    tabList,
    activeTab,
    isLoading,
    loadingMessage,
    prefectures,
    activePrefectures,
    data,
    chartOptions,
    updateGragh,
  }
}

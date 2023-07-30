import { ref } from 'vue'

interface TabProp {
  name: string
  key: string
}

export const useTab = () => {
  const tabList: Array<TabProp> = [
    {
      name: '総人口',
      key: 'total',
    },
    {
      name: '年少人口',
      key: 'young',
    },
    {
      name: '生産年齢人口',
      key: 'working',
    },
    {
      name: '老年人口',
      key: 'old',
    },
  ]
  const activeTab = ref(tabList[0].key)

  return {
    tabList,
    activeTab,
  }
}

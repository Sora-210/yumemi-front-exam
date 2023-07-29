<template>
  <div class="app">
    <s-loading-over-lay
      :is-show="isLoading"
      :message="loadingMessage"
      @click="isLoading = false"
    />
    <s-header> 人口推移グラフ </s-header>
    <s-main-container class="main">
      <section>
        <s-card>
          <s-card-title> 都道府県選択 </s-card-title>
          <div class="select-list">
            <s-check-box
              v-for="select in selectList"
              :key="select.key"
              v-model="select.isChecked"
              :name="select.name"
            >
              {{ select.name }}
            </s-check-box>
          </div>
          <div class="select-action">
            <s-button @click="updateGragh"> 表示 </s-button>
          </div>
        </s-card>
      </section>
      <section style="margin-top: 50px">
        <s-card>
          <s-card-title> 推移グラフ </s-card-title>
          <s-tab-box v-model="activeTab" :tabs="tabList">
            <template #total>
              <h1>総人口</h1>
            </template>
            <template #young>
              <h1>年少人口</h1>
            </template>
            <template #working>
              <h1>生産年齢人口</h1>
            </template>
            <template #old>
              <h1>老年人口</h1>
            </template>
          </s-tab-box>
        </s-card>
      </section>
    </s-main-container>
    <s-footer>&copy; 2023 yumemi.sora210.dev</s-footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(true)
const loadingMessage = ref('データ取得中...')

const selectList = ref([
  {
    name: '選択肢1',
    key: 'select1',
    isChecked: false,
  },
  {
    name: '選択肢2',
    key: 'select2',
    isChecked: false,
  },
  {
    name: '選択肢3',
    key: 'select3',
    isChecked: false,
  },
])

const activeTab = ref('total')
const tabList = [
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

const updateGragh = () => {
  console.log(selectList.value)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
</style>
<style scoped>
.app {
  position: relative;
  background-color: #cfe8ef60;
  min-height: 100vh;
  width: 100vw;
}
.main {
  min-height: calc(100vh - 67.19px - 40px - 27.19px);
  padding-bottom: 20px;
}

.select-list {
  display: flex;
  flex-wrap: wrap;
}

.select-action {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>

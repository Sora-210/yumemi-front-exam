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
              v-for="prefecture in prefectures"
              :key="prefecture.key"
              v-model="prefecture.isChecked"
              :name="prefecture.name"
            >
              {{ prefecture.name }}
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
              <highchart :options="chartOptions.total" />
            </template>
            <template #young>
              <highchart :options="chartOptions.young" />
            </template>
            <template #working>
              <highchart :options="chartOptions.working" />
            </template>
            <template #old>
              <highchart :options="chartOptions.old" />
            </template>
          </s-tab-box>
        </s-card>
      </section>
    </s-main-container>
    <s-footer>&copy; 2023 yumemi.sora210.dev</s-footer>
  </div>
</template>

<script setup lang="ts">
import { useApp } from './composables/useApp'
const {
  tabList,
  activeTab,
  isLoading,
  loadingMessage,
  prefectures,
  chartOptions,
  updateGragh,
} = useApp()
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
  padding-bottom: 50px;
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

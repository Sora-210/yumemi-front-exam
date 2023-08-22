<template>
  <nav class="tab-list">
    <ul>
      <li v-for="tab in props.tabs" :key="tab.key">
        <s-tab :is-active="activeTab === tab.key" @click="changeValue(tab.key)">
          {{ tab.name }}
        </s-tab>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, computed } from 'vue'

interface STabListProps {
  modelValue?: string
  tabs?: Array<{
    name: string
    key: string
  }>
}
const props = withDefaults(defineProps<STabListProps>(), {
  modelValue: '',
  tabs: () => [],
})
const emits = defineEmits<{ (e: 'update:modelValue', value: String): void }>()

const activeTab = computed({
  get: (): string => {
    return props.modelValue
  },
  set: (value: string) => {
    emits('update:modelValue', value)
  },
})

const changeValue = (v) => {
  activeTab.value = v
}
</script>

<style scoped>
.tab-list {
  overflow-x: scroll;
}
.tab-list ul {
  display: flex;
  flex-direction: row;
}
</style>

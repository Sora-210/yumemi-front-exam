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
import { ref, defineProps, defineEmits, onMounted, watch } from 'vue'

const activeTab = ref('')

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
  tabs: {
    type: Array<{
      name: String
      key: String
    }>,
    required: false,
    default: [],
  },
})
const emits = defineEmits<{ (e: 'update:modelValue', value: String): void }>()

onMounted(() => {
  activeTab.value = props.modelValue
})

const changeValue = (v) => {
  activeTab.value = v
  emits('update:modelValue', v)
}

watch(
  () => props.modelValue,
  (v) => {
    activeTab.value = v
  }
)
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

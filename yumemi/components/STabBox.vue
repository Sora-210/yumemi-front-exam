<template>
  <div>
    <s-tab-list
      :model-value="activeTab"
      :tabs="tabs"
      @update:model-value="changeValue($event)"
    >
    </s-tab-list>
    <template v-for="name in slotNames">
      <div v-if="name === activeTab" :key="name" class="box">
        <slot :name="name"></slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  withDefaults,
  defineProps,
  defineEmits,
  onMounted,
  watch,
  useSlots,
  computed,
} from 'vue'

const activeTab = ref('')

interface STabBoxProps {
  modelValue?: string
  tabs?: Array<{
    name: string
    key: string
  }>
}
const props = withDefaults(defineProps<STabBoxProps>(), {
  modelValue: '',
  tabs: () => [],
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

const slots = useSlots()
const slotNames = computed(() => {
  const list = []
  for (const slot in slots) {
    list.push(slot)
  }
  return list
})
</script>

<style scoped>
.box {
  padding: 1em;
}
</style>

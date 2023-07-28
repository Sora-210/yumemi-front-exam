<template>
  <label class="checkbox" :name="props.name">
    <input
      :checked="isChecked"
      type="checkbox"
      :name="props.name"
      @change="changeValue($event.target.checked)"
    />
    <span class="checkbox-icon"></span>
    <span class="checkbox-text"><slot></slot></span>
  </label>
</template>

<script setup lang="ts">
const isChecked = ref(false)

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: false,
    default: false,
  },
  name: {
    type: [String, Number],
    required: false,
    default: '',
  },
})
const emits = defineEmits<{ (e: 'update:modelValue', value: Boolean): void }>()

onMounted(() => {
  isChecked.value = props.modelValue
})

const changeValue = (v) => {
  isChecked.value = v
  emits('update:modelValue', v)
}

watch(
  () => props.modelValue,
  (v) => {
    isChecked.value = v
  }
)
</script>

<style scoped>
.checkbox {
  display: inline-block;
  padding: 0.5em;
  border-radius: 1em;
  cursor: pointer;
}

input[type='checkbox'] {
  display: none;
}

.checkbox-icon {
  position: relative;
  padding: 10px;
  border-radius: 20px;
  transition: background-color ease 0.2s;
}
.checkbox:hover .checkbox-icon {
  background-color: #c6dbf080;
  transition: background-color ease 0.2s;
}

.checkbox-icon:before {
  content: '';
  display: inline-block;
  border: 2px solid #a0c4e2;
  width: 10px;
  height: 10px;
}

.checkbox-icon:after {
  position: absolute;
  bottom: 17px;
  left: 12px;
  content: '';
  display: inline-block;
  border-bottom: 3px solid #85c7de;
  border-right: 3px solid #85c7de;
  width: 9px;
  height: 13px;
  margin-right: 0.5em;
  transform: rotate(0deg);
  opacity: 0;
  transition:
    opacity ease 0.3s,
    transform ease 0.4s;
}

input[type='checkbox']:checked + .checkbox-icon:after {
  opacity: 1;
  transform: rotate(40deg);
  transition:
    opacity ease 0.3s,
    transform ease 0.4s;
}
</style>

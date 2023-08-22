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
import { withDefaults, defineProps, defineEmits, computed } from 'vue'

interface SCheckBoxProps {
  modelValue?: boolean
  name?: string | number
}
const props = withDefaults(defineProps<SCheckBoxProps>(), {
  modelValue: false,
  name: '',
})
const emits = defineEmits<{ (e: 'update:modelValue', value: Boolean): void }>()

const isChecked = computed({
  get: (): boolean => {
    return props.modelValue
  },
  set: (value: boolean) => {
    emits('update:modelValue', value)
  },
})

const changeValue = (v) => {
  isChecked.value = v
}
</script>

<style scoped>
.checkbox {
  display: inline-block;
  padding: 0.5em;
  border-radius: 1em;
  cursor: pointer;
}

input[type='checkbox'] {
  position: absolute;
  filter: alpha(opacity=0);
  opacity: 0;
  appearance: none;
  -moz-opacity: 0;
  -webkit-appearance: none;
}

.checkbox-icon {
  position: relative;
  padding: 10px;
  border-radius: 20px;
  transition: background-color ease 0.2s;
}

.checkbox input:focus + .checkbox-icon,
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

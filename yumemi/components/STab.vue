<template>
  <div class="tab-button" :class="props.isActive ? 'active' : ''">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
})
</script>

<style scoped>
.tab-button {
  display: inline-block;
  padding: 0.3em 1.5em;
  cursor: pointer;
  transition: background-color ease 0.3s;
  white-space: nowrap;
}
.tab-button:hover {
  background-color: #c6dbf080;
  transition: background-color ease 0.3s;
}

.active {
  border-bottom: solid 5px #85c7de;
  animation-name: active;
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

@keyframes active {
  0% {
    border-bottom: solid 5px #ffffff;
  }
  100% {
    border-bottom: solid 5px #85c7de;
  }
}
</style>

<template>
  <div v-if="props.isShow" class="wrap-loading">
    <img class="loading-icon" src="@/assets/loading.svg" />
    <p v-if="props.message" class="loading-message">{{ props.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  isShow: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<style scoped>
.wrap-loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #3d3d3d90;
  z-index: 9999999999;
}
.loading-message {
  color: #000000;
  background-color: #ffffff;
  margin-top: 2rem;
  padding: 0.5em 2em;
  border-radius: 1em;
}
</style>

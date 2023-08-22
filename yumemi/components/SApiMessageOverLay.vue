<template>
  <div v-if="props.isShow" class="wrap-api-message">
    <div class="message">
      <h4>API Error</h4>
      <p>
        {{ detailMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue'

interface SMessageOverLayProps {
  isShow: boolean
  statusCode?: string
}
const props = withDefaults(defineProps<SMessageOverLayProps>(), {
  statusCode: '500',
})

const detailMessage = computed<String>(() => {
  switch (props.statusCode) {
    case '429':
      return 'アクセスが集中しています。時間を空けて再度アクセスしてください。'
    default:
      return 'データ取得中に問題が発生しました'
  }
})
</script>

<style scoped>
.wrap-api-message {
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
.message {
  color: #000000;
  background-color: #ffffff;
  margin-top: 2rem;
  padding: 1.5em 3em;
  border-radius: 1em;
}
</style>

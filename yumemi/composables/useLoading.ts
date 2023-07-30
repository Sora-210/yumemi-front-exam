import { ref } from 'vue'

export const useLoading = () => {
  const isLoading = ref(true)
  const loadingMessage = ref('データ取得中...')

  return {
    isLoading,
    loadingMessage,
  }
}

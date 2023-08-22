import { ref } from 'vue'

export const useAPIMessage = () => {
  const isAPIMessage = ref(false)
  const apiStatuCode = ref(200)

  return {
    isAPIMessage,
    apiStatuCode,
  }
}

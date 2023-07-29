import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-Vue'

export default defineConfig({
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('s-'),
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

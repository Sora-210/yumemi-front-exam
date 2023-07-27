import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-Vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

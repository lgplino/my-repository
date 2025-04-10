import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/<nome-do-repositorio>/', // Substitua <nome-do-repositorio> pelo nome do seu repositório
  plugins: [react()],
})

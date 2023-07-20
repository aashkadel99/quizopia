import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    external: ["react", "react-router", "react-router-dom", "react-redux"],
    output: {
      globals: {
        react: "React",
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // @material-tailwind/react ships its own copy of React; two copies break hooks ("reading 'useRef'").
  resolve: { dedupe: ['react', 'react-dom'] },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    // many things can be added here: port,handlers,append,apply regex etc...
    proxy:{
      '/api':'http://localhost:3000' //proxy applied: automatically append this url (that the req is coming from this url)
    }
  },
  plugins: [react()],
})

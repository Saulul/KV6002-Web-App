import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
//import autoprefixer from 'autoprefixer';
//autoprefixer fails the build, I have no idea what autoprefixer is and where it came from :D

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
           tailwindcss(),
//           autoprefixer(),
           ],
  server: {
    host: '0.0.0.0',
  }
})

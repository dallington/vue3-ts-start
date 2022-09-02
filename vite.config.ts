import Vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
    Vue(), 
    WindiCSS(), 
    Pages({
      dirs: 'src/views',
    }), 
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    strictPort: true
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})

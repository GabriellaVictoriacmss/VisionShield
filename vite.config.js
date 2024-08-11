import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Define o diretório de saída como 'dist'
  },
  server: {
    port: 5173, // Altere para a porta desejada, se necessário
    host: '0.0.0.0', // Permite conexões externas
  },
});

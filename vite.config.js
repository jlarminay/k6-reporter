import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  plugins: [
    ViteEjsPlugin({
      // Plugin options if needed
    }),
  ],
  build: {
    lib: {
      entry: './src/html-report.js',
      name: 'htmlReport',
      fileName: 'bundle',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['ejs'],
      output: {
        globals: {
          ejs: 'ejs',
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  assetsInclude: ['**/*.ejs'],
});

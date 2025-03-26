import { defineConfig } from 'vite';

export default defineConfig({
  root: 'docs', // Tell Vite that your index.html is in the docs folder
  build: {
    outDir: '../dist' // Build output folder relative to project root (you can adjust this)
  }
});

import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** Figma Make exports `figma:asset/...` imports; outside Figma those files are not present. Resolve to a data URL so local dev works. */
function figmaAssetPlaceholder(): Plugin {
  const placeholderPng =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
  return {
    name: 'figma-asset-placeholder',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) return `\0${id}`
    },
    load(id) {
      if (id.startsWith('\0figma:asset/')) {
        return `export default ${JSON.stringify(placeholderPng)}`
      }
    },
  }
}

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  plugins: [
    figmaAssetPlaceholder(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

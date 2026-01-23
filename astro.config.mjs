import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://r66ff.github.io',
  base: '/tda',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
})

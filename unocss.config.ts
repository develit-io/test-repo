import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'app-btn': 'bg-blue' },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        montserat: 'Montserrat',
        inter: 'Inter',
      },
    }),
  ],
  theme: {
    colors: {
      app: {
        primary: '#1D1D1F',
        secondary: '#000',
      },
    },
  },
})

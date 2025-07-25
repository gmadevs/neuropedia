import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  appearance: 'dark',

  head: [
    // Link alla favicon principale (di solito .ico o la più piccola .png)
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

  title: 'NeuroPedia',
  description: 'Open-access neuroradiology textbook',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About the project', link: '/about' },
      { text: 'About the Author', link: '/author'},
      { text: 'Statistics', link: '/pages/analysis_report'}
    ],

    footer: {
    message: 'Released under the CC 4.0 License.',
    copyright: 'Copyright © 2025-NeuroPedia, Icons created by Freepik - Flaticon'
    },

    search: {
      provider: 'local'
    },

 // --- Inizio Modifiche Sidebar ---
    sidebar: [
      {
        text: 'Brain and spine',
        items: [
          // Tutti i link devono iniziare con '/'
          { text: 'Introduction', link: '/pages/introduction' },
          { text: 'Incidental/anatomical variants', link: '/pages/incidental' },
          { text: 'Vascular pathology', link: '/pages/vascular' },
          { text: 'Cranial nerves and peripheral nervous system', link: '/pages/nerves' },
          { text: 'Trauma', link: '/pages/trauma' },
          { text: 'CSF', link: '/pages/csf' },
          { text: 'Inflammatory/autoimmune', link: '/pages/inflammatory' },
          { text: 'Infections', link: '/pages/infective' },
          { text: 'Toxic/metabolic', link: '/pages/toxic' },
          { text: 'Neuro-oncology', link: '/pages/neurooncology' },
          { text: 'Degenerative disease', link: '/pages/degenerative' },
          { text: 'Epilepsy', link: '/pages/epilepsy' },
          { text: 'Spine', link: '/pages/spine' },
          { text: 'Orbit', link: '/pages/orbit' },
          { text: 'Pituitary', link: '/pages/pituitary' },
          { text: 'Temporal bone', link: '/pages/temporal' },
          { text: 'Pediatric', link: '/pages/pediatric' }
        ]
      },

      {

        text: 'Head and neck',
        items: [

          { text: 'Head and Neck', link: '/pages/head_neck' },

        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gmadevs/neuropedia' },
      { icon: 'x', link: 'https://x.com/agazzi_giorgio' },
      { icon: 'discord', link: 'https://discord.gg/CM6Sgehk' }
    ]
  }
})

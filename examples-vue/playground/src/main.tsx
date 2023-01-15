import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import { App } from '@examples-vue/react'
import { sources } from '@examples-vue/vue'
import { ContentWidget } from './widgets'
const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    createElement(App, {
      Content: () =>
        createElement(ContentWidget, {
          components: {
            ...sources,
          },
        }),
      sources: Object.values(sources),
    })
  )
} else {
  console.error('dom root is non-existent')
}

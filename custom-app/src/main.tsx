import React from 'react'
import { createRoot } from 'react-dom/client'

import { Codeblock } from './Codeblock.js'

const render = async () => {
  // Get or create code-block-id container
  let codeBlockContainer = document.getElementById('code-block-id')
  if (!codeBlockContainer) {
    codeBlockContainer = document.createElement('div')
    codeBlockContainer.setAttribute('id', 'code-block-id')
    document.body.appendChild(codeBlockContainer)
  }

  // Render Codeblock into code-block-id container
  const codeBlockRoot = createRoot(codeBlockContainer)
  codeBlockRoot.render(
    <React.StrictMode>
      <Codeblock />
    </React.StrictMode>,
  )

  // Show the container after rendering
  if (codeBlockContainer) codeBlockContainer.style.display = 'block'

  // Remove the default built with fern link since we add one in the Footer component.
  document.getElementById('builtwithfern')?.remove()
}

// Use 'load' event instead of 'DOMContentLoaded' for App Router
window.addEventListener('load', async () => {
  // Only render on /docs or /docs/
  const initalPath = window.location.pathname.replace(/\/+$/, '')

  if (initalPath === '/docs') {
    await render()
  }

  new MutationObserver(async () => {
    const currentPath = window.location.pathname.replace(/\/+$/, '')
    // Only render if on /docs and footer is missing
    const shouldRender = currentPath === '/docs'

    if (shouldRender) {
      await render()
    }
  }).observe(document.body, { childList: true, subtree: true })
})

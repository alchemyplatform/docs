import React from 'react'
import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'

import { Codeblock } from './Codeblock.js'

const CODE_BLOCK_ID = 'code-block-id'

let codeBlockRoot: Root | null = null

const render = async () => {
  // Get or create code-block-id container
  let codeBlockContainer = document.getElementById(CODE_BLOCK_ID)
  if (!codeBlockContainer) {
    codeBlockContainer = document.createElement('div')
    codeBlockContainer.setAttribute('id', CODE_BLOCK_ID)
    document.body.appendChild(codeBlockContainer)
  }

  // Check if already rendered
  if (codeBlockContainer.hasChildNodes()) {
    return
  }

  // Create root only once, reuse it
  if (!codeBlockRoot) {
    codeBlockRoot = createRoot(codeBlockContainer)
  }

  // Render Codeblock into code-block-id container
  codeBlockRoot.render(
    <React.StrictMode>
      <Codeblock />
    </React.StrictMode>,
  )

  // Show the container after rendering
  codeBlockContainer.style.display = 'block'

  // Remove the default built with fern link since we add one in the Footer component.
  document.getElementById('builtwithfern')?.remove()
}

window.addEventListener('load', async () => {
  // Only render on /docs or /docs/
  const initialPath = window.location.pathname.replace(/\/+$/, '')

  // Initial render if on /docs
  if (initialPath === '/docs') {
    await render()
  }

  // Set up observer to re-render when component gets unmounted
  const observer = new MutationObserver(async (mutations) => {
    const currentPath = window.location.pathname.replace(/\/+$/, '')

    // Clean up observer if we leave /docs
    if (currentPath !== '/docs') {
      observer.disconnect()
      return
    }

    // Only render if on /docs and CodeBlock is missing after a DOM change
    const shouldRender =
      currentPath === '/docs' &&
      mutations.some(
        (mutation) =>
          mutation.type === 'childList' &&
          !document.getElementById(CODE_BLOCK_ID)?.hasChildNodes(), // UPDATE THIS if we change which components are rendered in custom-app
      )

    if (shouldRender) {
      await render()
    }
  })

  observer.observe(document.body, { childList: true, subtree: true })
})

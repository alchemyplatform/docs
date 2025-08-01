import React from 'react'
import { createRoot } from 'react-dom/client'

import { Codeblock } from './Codeblock.js'

const CODE_BLOCK_ID = 'code-block-id'

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

  const codeBlockRoot = createRoot(codeBlockContainer)
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

const initializeApp = async () => {
  console.log('initializeApp')
  // Only render on /docs or /docs/
  const initialPath = window.location.pathname.replace(/\/+$/, '')

  // Initial render if on /docs
  if (initialPath === '/docs') {
    await render()
  }

  // Set up observer to re-render when component gets unmounted
  const observer = new MutationObserver(async (mutations) => {
    const currentPath = window.location.pathname.replace(/\/+$/, '')

    const onHomepage = currentPath === '/docs'
    if (!onHomepage) {
      return
    }

    // Only render if on /docs and CodeBlock is missing after a DOM change
    const shouldRender = mutations.some((mutation) => {
      const isChildList = mutation.type === 'childList'
      const elementMissingOrEmpty = !document
        .getElementById(CODE_BLOCK_ID) // UPDATE THIS if we change which components are rendered in custom-app
        ?.hasChildNodes()
      return isChildList && elementMissingOrEmpty
    })

    if (shouldRender) {
      await render()
    }
  })

  observer.observe(document.body, { childList: true, subtree: true })
}

// Run immediately when script loads (for direct navigation to homepage)
initializeApp()

// Also run on popstate (for back/forward navigation)
window.addEventListener('popstate', () => {
  console.log('popstate')
  initializeApp()
})

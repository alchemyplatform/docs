import React from 'react'
import { createRoot } from 'react-dom/client'

import { CustomFooter } from './Footer.js'
import { Codeblock } from './Codeblock.js'

const FERN_FOOTER_CONTAINER_ID = 'fern-footer'

const render = async () => {
  const alchemyFooterId = document.getElementById('alchemy-footer')

  if (!alchemyFooterId) {
    // Create alchemy footer wrapper with a data attribute to help with hydration
    const alchemyContentWrapper = document.createElement('div')
    alchemyContentWrapper.setAttribute('id', 'alchemy-footer')
    alchemyContentWrapper.setAttribute('data-react-component', 'true')

    // Get or create fern-footer container
    let fernFooterContainer = document.getElementById(FERN_FOOTER_CONTAINER_ID)
    if (!fernFooterContainer) {
      fernFooterContainer = document.createElement('div')
      fernFooterContainer.setAttribute('id', FERN_FOOTER_CONTAINER_ID)
      document.body.appendChild(fernFooterContainer)
    }

    // Get or create code-block-id container
    let codeBlockContainer = document.getElementById('code-block-id')
    if (!codeBlockContainer) {
      codeBlockContainer = document.createElement('div')
      codeBlockContainer.setAttribute('id', 'code-block-id')
      document.body.appendChild(codeBlockContainer)
    }

    fernFooterContainer.insertBefore(
      alchemyContentWrapper,
      fernFooterContainer.firstChild,
    )

    // Use createRoot instead of render for React 18+ compatibility
    const root = createRoot(alchemyContentWrapper)
    root.render(
      <React.StrictMode>
        <CustomFooter />
      </React.StrictMode>,
    )

    // Render Codeblock into code-block-id container
    const codeBlockRoot = createRoot(codeBlockContainer)
    codeBlockRoot.render(
      <React.StrictMode>
        <Codeblock />
      </React.StrictMode>,
    )

    // Show the container after rendering
    if (fernFooterContainer) fernFooterContainer.style.display = 'block'
    if (codeBlockContainer) codeBlockContainer.style.display = 'block'

    document.getElementById('builtwithfern')?.remove()
  }
}

// Use 'load' event instead of 'DOMContentLoaded' for App Router
window.addEventListener('load', async () => {
  // Only render on /docs or /docs/
  const initalPath = window.location.pathname.replace(/\/+$/, '')

  if (initalPath === '/docs') {
    await render()
  }

  new MutationObserver(async (mutations) => {
    const currentPath = window.location.pathname.replace(/\/+$/, '')
    // Only render if on /docs and footer is missing
    const shouldRender =
      currentPath === '/docs' &&
      mutations.some(
        (mutation) =>
          mutation.type === 'childList' &&
          !document.getElementById('alchemy-footer'),
      )
    if (shouldRender) {
      await render()
    }

    // Optionally: Remove custom footer if not on /docs
    if (currentPath !== '/docs' && document.getElementById('alchemy-footer')) {
      document.getElementById('alchemy-footer')?.remove()
    }
  }).observe(document.body, { childList: true, subtree: true })
})

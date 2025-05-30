import './main.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react'
import { createRoot } from 'react-dom/client'

import { CustomFooter } from './Footer.js'

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

    // Show the container after rendering
    if (fernFooterContainer) fernFooterContainer.style.display = 'block'

    // reposition 'builtwithfern' element
    const builtWithFern = document.getElementById('builtwithfern')
    if (builtWithFern) {
      builtWithFern.remove()
      fernFooterContainer.append(builtWithFern)
      builtWithFern.classList.add('mt-0')
    }
  }
}

// Use 'load' event instead of 'DOMContentLoaded' for App Router
window.addEventListener('load', async () => {
  // Only render on /docs
  if (window.location.pathname === '/docs') {
    await render()
  }

  new MutationObserver(async (mutations) => {
    // Only render if on /docs and footer is missing
    const shouldRender =
      window.location.pathname === '/docs' &&
      mutations.some(
        (mutation) =>
          mutation.type === 'childList' &&
          !document.getElementById('alchemy-footer'),
      )
    if (shouldRender) {
      await render()
    }
    // Optionally: Remove footer if not on /docs
    if (
      window.location.pathname !== '/docs' &&
      document.getElementById('alchemy-footer')
    ) {
      document.getElementById('alchemy-footer')?.remove()
    }
  }).observe(document.body, { childList: true, subtree: true })
})

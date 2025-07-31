import React from 'react'
import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'

import { Codeblock } from './Codeblock.js'

const CODE_BLOCK_ID = 'code-block-id'

let codeBlockRoot: Root | null = null

const render = async () => {
  console.log('🎯 render() called')

  // Get or create code-block-id container
  let codeBlockContainer = document.getElementById(CODE_BLOCK_ID)
  if (!codeBlockContainer) {
    console.log('📦 Creating new code block container')
    codeBlockContainer = document.createElement('div')
    codeBlockContainer.setAttribute('id', CODE_BLOCK_ID)
    document.body.appendChild(codeBlockContainer)
  } else {
    console.log('📦 Code block container already exists')
  }

  // Check if already rendered
  if (codeBlockContainer.hasChildNodes()) {
    console.log('🔄 Container has children, skipping render')
    return
  } else {
    console.log('📭 Container is empty, proceeding with render')
  }

  // Create root only once, reuse it
  if (!codeBlockRoot) {
    console.log('🌱 Creating new React root')
    codeBlockRoot = createRoot(codeBlockContainer)
  } else {
    console.log('🌱 Reusing existing React root')
  }

  // Render Codeblock into code-block-id container
  console.log('⚛️ Rendering Codeblock component')
  codeBlockRoot.render(
    <React.StrictMode>
      <Codeblock />
    </React.StrictMode>,
  )

  // Show the container after rendering
  codeBlockContainer.style.display = 'block'

  // Remove the default built with fern link since we add one in the Footer component.
  document.getElementById('builtwithfern')?.remove()

  console.log('✅ render() completed')
}

window.addEventListener('load', async () => {
  console.log('🚀 Window loaded, initialPath:', window.location.pathname)

  // Only render on /docs or /docs/
  const initialPath = window.location.pathname.replace(/\/+$/, '')

  // Initial render if on /docs
  if (initialPath === '/docs') {
    console.log('📍 On /docs page, doing initial render')
    await render()
  } else {
    console.log('📍 Not on /docs page, skipping initial render')
  }

  // Set up observer to re-render when component gets unmounted
  console.log('👁️ Setting up MutationObserver')
  const observer = new MutationObserver(async (mutations) => {
    const currentPath = window.location.pathname.replace(/\/+$/, '')

    console.log('🔍 MutationObserver fired:', {
      currentPath,
      mutationsCount: mutations.length,
      elementExists: !!document.getElementById(CODE_BLOCK_ID),
      elementHasChildren: !!document
        .getElementById(CODE_BLOCK_ID)
        ?.hasChildNodes(),
    })

    // Clean up observer if we leave /docs
    if (currentPath !== '/docs') {
      console.log('🚪 Left /docs page, disconnecting observer')
      observer.disconnect()
      return
    }

    // Only render if on /docs and CodeBlock is missing after a DOM change
    const shouldRender =
      currentPath === '/docs' &&
      mutations.some((mutation) => {
        const isChildList = mutation.type === 'childList'
        const element = document.getElementById(CODE_BLOCK_ID)
        const elementMissingOrEmpty = !element?.hasChildNodes()
        console.log('🧪 Checking mutation:', {
          type: mutation.type,
          isChildList,
          elementExists: !!element,
          elementHasChildren: !!element?.hasChildNodes(),
          elementMissingOrEmpty,
          target: mutation.target.nodeName,
        })
        return isChildList && elementMissingOrEmpty
      })

    console.log('🎲 Should render?', shouldRender)

    if (shouldRender) {
      console.log('▶️ Triggering render from MutationObserver')
      await render()
    }
  })

  observer.observe(document.body, { childList: true, subtree: true })
  console.log('👁️ MutationObserver is now watching document.body')
})

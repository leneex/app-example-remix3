import { createRequire } from 'node:module'
import { css } from 'remix/component'

import { Document } from './document.tsx'
import { CounterButton } from './public/counter-button.tsx'

const require = createRequire(import.meta.url)
const remixPkg = require('remix/package.json') as { version: string }

// Home page: rendered on the server on every request
export function HomePage() {
  let remixVersion = remixPkg.version
  let nodeVersion = process.versions.node

  return () => (
    <Document>
      <main
        mix={css({
          margin: 0,
          padding: '48px 24px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          lineHeight: 1.5,
          color: '#111',
          maxWidth: '640px',
        })}
      >
        <h1>Hello world</h1>
        <p>Remix: {remixVersion}</p>
        <p>Node.js: {nodeVersion}</p>
        <div mix={css({ marginTop: '24px' })}>
          <CounterButton />
        </div>
      </main>
    </Document>
  )
}

import { clientEntry, css, on, type Handle } from 'remix/component'

// Client component: a counter button that is hydrated in the browser
export const CounterButton = clientEntry(
  import.meta.url,
  function CounterButton(handle: Handle) {
    let count = 0

    return () => (
      <button
        type="button"
        mix={[
          on('click', () => {
            count++
            handle.update()
          }),
          css({
            appearance: 'none',
            font: 'inherit',
            fontSize: '16px',
            padding: '12px 24px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            background: '#fff',
            color: '#111',
            cursor: 'pointer',
            transition: 'background-color 150ms ease, border-color 150ms ease',
            '&:hover': {
              background: '#f3f4f6',
              borderColor: '#999',
            },
            '&:active': {
              background: '#e5e7eb',
            },
          }),
        ]}
      >
        Clicks: {count}
      </button>
    )
  },
)

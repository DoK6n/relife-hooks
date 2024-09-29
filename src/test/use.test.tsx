import React, { Suspense } from 'react'
import { use } from '../use'
import { cleanup, getByTestId, render, waitFor } from '@testing-library/react'

describe('use', () => {
  let App = () => <div />
  let thenable = vi.fn()
  const GetData = ({ promise }: { promise: Promise<string> }) => {
    const data = use<string>(promise)
    return <div data-testid='data'>{data}</div>
  }

  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  describe('with Suspense', () => {
    beforeEach(() => {
      thenable = thenable.mockResolvedValue('success')

      App = () => {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <GetData promise={thenable()} />
          </Suspense>
        )
      }
    })

    it('should show loading state when promise is pending / 비동기 처리 중일 때 로딩 상태가 표시되어야 한다', async () => {
      const { container } = render(<App />)

      expect(container.textContent).toBe('Loading...')
    })

    it('should show data when promise is resolved / 비동기 처리가 완료되면 데이터가 표시되어야 한다', async () => {
      const { container } = render(<App />)

      await waitFor(() => {
        const getDataElement = getByTestId(container, 'data')

        expect(getDataElement.textContent).toBe('success')
      })
    })

    it('should not show loading state when promise is resolved / 비동기 처리가 완료되면 로딩 상태가 표시되지 않아야 한다', async () => {
      const { container } = render(<App />)

      await waitFor(() => {
        expect(container.textContent).not.toBe('Loading...')
      })
    })
  })
})

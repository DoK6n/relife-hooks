import { renderHook, act } from '@testing-library/react'
import { useState } from 'react'
import { useUpdate } from '../use-update'

describe('useUpdate', () => {
  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('should be defined', () => {
    expect(useUpdate).toBeDefined()
  })

  describe('with rerender', () => {
    it('should only run the callback three times even if state changes twice', () => {
      const mockCallback = vi.fn()
      const { result } = renderHook(() => {
        const [count, setCount] = useState(0)
        useUpdate(mockCallback, [count])
        return { count, setCount }
      })

      act(() => result.current.setCount(1))
      act(() => result.current.setCount(2))

      expect(mockCallback).toHaveBeenCalledTimes(3)
    })
  })
})

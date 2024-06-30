import { renderHook, act } from '@testing-library/react'
import { useState } from 'react'
import { useUpdateBeforePaint } from '../use-update-before-paint'

describe('useUpdateBeforePaint', () => {
  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('should be defined', () => {
    expect(useUpdateBeforePaint).toBeDefined()
  })

  describe('with rerender', () => {
    it('should only run the callback three times even if state changes twice', () => {
      const mockCallback = vi.fn()
      const { result } = renderHook(() => {
        const [count, setCount] = useState(0)
        useUpdateBeforePaint(mockCallback, [count])
        return { count, setCount }
      })

      act(() => result.current.setCount(1))
      act(() => result.current.setCount(2))

      expect(mockCallback).toHaveBeenCalledTimes(3)
    })
  })
})

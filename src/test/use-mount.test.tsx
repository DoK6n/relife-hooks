import { useState } from 'react'
import { renderHook, act } from '@testing-library/react'
import { useMount } from '../use-mount'

describe('useMount', () => {
  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('should be defined', () => {
    expect(useMount).toBeDefined()
  })

  it('should call the callback function exactly once after mount', () => {
    const mockCallback = vi.fn()
    renderHook(() => useMount(mockCallback))

    expect(mockCallback).toHaveBeenCalledTimes(1)
  })

  describe('with rerender', () => {
    it('should only run the callback once even if state changes twice', () => {
      const mockCallback = vi.fn()
      const { result } = renderHook(() => {
        const [count, setCount] = useState(0)
        useMount(mockCallback)
        return { count, setCount }
      })

      act(() => result.current.setCount(1))
      act(() => result.current.setCount(2))

      expect(mockCallback).toHaveBeenCalledTimes(1)
    })
  })
})

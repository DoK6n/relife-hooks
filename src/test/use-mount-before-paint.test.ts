import { useState } from 'react'
import { renderHook, act } from '@testing-library/react'
import { useMountBeforePaint } from '../use-mount-before-paint'

describe('useMountBeforePaint', () => {
  afterEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('should be defined', () => {
    expect(useMountBeforePaint).toBeDefined()
  })

  it('should call the callback function exactly once after mount before paint', () => {
    const mockCallback = vi.fn()
    renderHook(() => useMountBeforePaint(mockCallback))

    expect(mockCallback).toHaveBeenCalledTimes(1)
  })

  describe('with rerender', () => {
    it('should only run the callback once even if state changes twice', () => {
      const mockCallback = vi.fn()
      const { result } = renderHook(() => {
        const [count, setCount] = useState(0)
        useMountBeforePaint(mockCallback)
        return { count, setCount }
      })

      act(() => result.current.setCount(1))
      act(() => result.current.setCount(2))

      expect(mockCallback).toHaveBeenCalledTimes(1)
    })
  })
})

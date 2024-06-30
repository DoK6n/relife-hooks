import React, { useReducer, useState } from 'react'
import { render, cleanup, fireEvent, act, getByTestId } from '@testing-library/react'
import { useUnmountBeforePaint } from '../use-unmount-before-paint'

describe('useUnmountBeforePaint', () => {
  it('should be defined', () => {
    expect(useUnmountBeforePaint).toBeDefined()
  })

  describe('should call the callback function once when a rerender in the parent component causes the child component to disappear', () => {
    let App = () => <div />
    const mockCallback = vi.fn()

    beforeEach(() => {
      const Child = () => {
        useUnmountBeforePaint(mockCallback)

        return <div>Child</div>
      }

      App = () => {
        const [count, setCount] = useState(0)
        const [isChildVisible, toggleChild] = useReducer(prev => !prev, false)

        return (
          <div>
            <p data-testid='count' onClick={() => setCount(count + 1)}>
              {count}
            </p>
            <button data-testid='toggle-child' onClick={toggleChild} type='button'>
              Toggle child visibility
            </button>
            {isChildVisible && <Child />}
          </div>
        )
      }
    })

    afterEach(() => {
      cleanup()
      vi.clearAllMocks()
    })

    it('should only call the unmount function only when unmount', () => {
      const { container } = render(<App />)
      const valueElement = getByTestId(container as HTMLElement, 'count')
      const toggleChildElement = getByTestId(container as HTMLElement, 'toggle-child')

      expect(mockCallback).toHaveBeenCalledTimes(0)

      // Parent component re-rendering
      act(() => {
        fireEvent.click(valueElement)
      })
      expect(mockCallback).toHaveBeenCalledTimes(0)

      // Mount child component
      act(() => {
        fireEvent.click(toggleChildElement)
      })
      expect(mockCallback).toHaveBeenCalledTimes(0)

      // Unmount child component
      act(() => {
        fireEvent.click(toggleChildElement)
      })
      expect(mockCallback).toHaveBeenCalledTimes(1)

      // Parent component re-rendering
      act(() => {
        fireEvent.click(valueElement)
      })
      expect(mockCallback).toHaveBeenCalledTimes(1)
    })
  })
})

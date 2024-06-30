import { useEffect, useRef } from 'react'

/**
 * @en
 * Effect that logs the previous and new values of the state variable
 *
 * @ko
 * 상태변수가 변경될 때마다 이전 값과 새로운 값을 로그로 출력하는 효과
 */
export function useMonitoringState<T>(state: T) {
  const prevState = useRef<T | undefined>(undefined)

  useEffect(() => {
    if (prevState.current !== undefined) {
      console.group('%cMonitoring State Changes', 'color: #FFB6C1;')
      console.log(`%c[Prev]: %o`, 'color: #696969;', prevState.current)
      console.log('%c[Next]: %o', 'color: #87CEEB;', state)
      console.groupEnd()
    }
    prevState.current = state
  }, [state])
}

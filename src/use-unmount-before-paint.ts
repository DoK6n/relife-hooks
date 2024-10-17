import { useLayoutEffect, useRef } from 'react'
import { env } from './utils'

/**
 * @en
 * Effect that runs when the component unmounts before browser paints screen
 *
 * @ko
 * 브라우저가 화면을 그리기 전에 컴포넌트가 언마운트될 때 실행되는 효과
 */
export function useUnmountBeforePaint(effect: React.EffectCallback) {
  const isPaintedRef = useRef(false)

  useLayoutEffect(() => {
    return () => {
      if (!env.DEV) {
        effect()
      } else if (isPaintedRef.current) {
        effect()
      }
      isPaintedRef.current = true
    }
  }, [])
}

import { useEffect, useRef } from 'react'
import { env } from './utils'

/**
 * @en
 * Effect that runs when the component unmounts
 *
 * @ko
 * 컴포넌트가 언마운트될 때 실행되는 효과
 */
export function useUnmount(effect: React.EffectCallback) {
  const isUnmountedRef = useRef(false)

  useEffect(() => {
    return () => {
      if (!env.DEV) {
        effect()
      } else if (isUnmountedRef.current) {
        effect()
      }
      isUnmountedRef.current = true
    }
  }, [])
}

import { useEffect, useRef } from 'react'
import { env } from './utils'

/**
 * @en
 * Effect that runs when the component mounts
 *
 * @ko
 * 컴포넌트가 마운트될 때 실행되는 효과
 */
export const useMount = (effect: React.EffectCallback) => {
  const isMountedRef = useRef(false)

  useEffect(() => {
    if (!env.DEV) {
      effect()
    } else if (isMountedRef.current) {
      effect()
    }
    isMountedRef.current = true
  }, [])
}

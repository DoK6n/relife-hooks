import { useEffect, useRef } from 'react'
import { hasDeps, env } from './utils'
import { useMount } from './use-mount'
import { useUnmount } from './use-unmount'

/**
 * @en
 * Effect that runs when the component updates
 *
 * @ko
 * 컴포넌트가 업데이트될 때 실행되는 효과
 */
export function useUpdate(effect: React.EffectCallback, deps: React.DependencyList) {
  const isMountedRef = useRef(false)

  useEffect(() => {
    if (!hasDeps(deps)) return

    if (!env.DEV) {
      effect()
    } else if (isMountedRef.current) {
      effect()
    }
  }, deps)

  useMount(() => {
    isMountedRef.current = true
  })

  useUnmount(() => {
    isMountedRef.current = false
  })
}

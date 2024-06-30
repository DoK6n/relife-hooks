import { useLayoutEffect, useRef } from 'react'
import { hasDeps, env } from './utils'
import { useUnmountBeforePaint } from './use-unmount-before-paint'
import { useMountBeforePaint } from './use-mount-before-paint'

/**
 * @en
 * Effect that runs before the browser updates the screen before painting
 *
 * @ko
 * 브라우저가 화면을 그리기 전에 업데이트될 때 실행되는 효과
 */
export function useUpdateBeforePaint(effect: React.EffectCallback, deps: React.DependencyList) {
  const isPaintedRef = useRef(false)

  useLayoutEffect(() => {
    if (!hasDeps(deps)) return

    if (!env.DEV) {
      effect()
    } else if (isPaintedRef.current) {
      effect()
    }
  }, deps)

  useMountBeforePaint(() => {
    isPaintedRef.current = true
  })

  useUnmountBeforePaint(() => {
    isPaintedRef.current = false
  })
}

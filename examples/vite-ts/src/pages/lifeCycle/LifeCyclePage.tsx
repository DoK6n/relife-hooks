import { useReducer, useState } from 'react'
import {
  useMonitoringState,
  useMount,
  useMountBeforePaint,
  useUnmount,
  useUnmountBeforePaint,
  useUpdate,
  useUpdateBeforePaint,
} from '../../../../../dist'
import Child from './ui/Child'
import { RouteObject } from 'react-router-dom'

export const LifeCycleRoute: RouteObject = {
  path: '/lifecycle',
  element: <LifeCyclePage />,
}

export default function LifeCyclePage() {
  const [count, setCount] = useState(0)
  const [isShow, toggle] = useReducer(state => !state, true)

  useMountBeforePaint(() => {
    console.log('Before paint')
  })

  useUpdateBeforePaint(() => {
    console.log('Before paint update')
  }, [count])

  useUnmountBeforePaint(() => {
    console.log('Before paint unmount')
  })

  useMount(() => {
    console.log('Mounted')
  })

  useUpdate(() => {
    console.log('Updated')
  }, [count])

  useUnmount(() => {
    console.log('Unmounted')
  })

  useMonitoringState(count)

  return (
    <div>
      <h1>React Lifecycle Effects</h1>
      <button onClick={() => setCount(count + 1)}>Increment ({count})</button>

      <br />
      <hr />
      <br />

      <button onClick={toggle}>Toggle Child</button>
      {isShow && <Child />}
    </div>
  )
}

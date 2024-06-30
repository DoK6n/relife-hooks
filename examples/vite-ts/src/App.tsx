import { useReducer, useState } from 'react'
import './App.css'
import {
  useMountBeforePaint,
  useUpdateBeforePaint,
  useUnmountBeforePaint,
  useMount,
  useUpdate,
  useUnmount,
  useMonitoringState,
} from '../../../dist'

function Child() {
  useMountBeforePaint(() => {
    console.log('Child mounted before paint')
  })

  useUnmountBeforePaint(() => {
    console.log('Child unmounted before paint')
  })

  useMount(() => {
    console.log('Child mounted')
  })

  useUnmount(() => {
    console.log('Child unmounted')
  })

  return <div className='card'>Child</div>
}

function App() {
  const [count, setCount] = useState(0)
  const [isShow, toggle] = useReducer(prev => !prev, true)

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

export default App

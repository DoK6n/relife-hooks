import { useMount, useMountBeforePaint, useUnmount, useUnmountBeforePaint } from 'relife-hooks'

export default function Child() {
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

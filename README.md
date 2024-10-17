# React Life

> **_English_**
>
> React Life is a library that provides more explicit lifecycle hooks using React's `useEffect` and
> `useLayoutEffect`. This library does not invoke twice in React.StrictMode.
>
> `useEffect` is called after the painting process, and `useLayoutEffect` is called before the
> painting process. This library was created to make the naming more explicit based on these
> timings.
>
> It is bundled with tsup and tested with vitest.

> **_Korean_**
>
> 리액트의 `useEffect`, `useLayoutEffect`를 사용하여 보다 명시적인 라이프 사이클 훅을 제공하는
> 라이브러리입니다. 이 라이브러리는 React.StrictMode에서 두번 호출하지 않습니다.
>
> `useEffect`는 paint 과정 이후, `useLayoutEffect`는 paint 과정 이전에 호출되며, 이를 기준으로
> 네이밍을 좀더 명시적으로 표현하기 위해 만들어졌습니다.
>
> tsup 을 통해 번들링되며, vitest로 테스트를 진행합니다.

## Install

```sh
npm install react-life
yarn add react-life
pnpm add react-life
```

## Usage

```tsx
import { useReducer, useState } from 'react'
import {
  useMonitoringState,
  useMount,
  useMountBeforePaint,
  useUnmount,
  useUnmountBeforePaint,
  useUpdate,
  useUpdateBeforePaint,
} from 'relife-hooks'

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

      <button onClick={toggle}>Toggle Child</button>
      {isShow && <Child />}
    </div>
  )
}
```

## useMount

```tsx
useMount(() => {
  console.log('Mounted')
})
```

@en

- It is an effect that runs when the component is mounted, similar to using an empty array in the dependency array of useEffect. However, it is implemented to prevent it from being called twice in the development environment using Strict Mode, and to call it only once.

@ko

- useEffect의 의존성 배열에 빈배열을 넣은 것과 같이 컴포넌트가 마운트될 때 실행되는 효과입니다. 다만, Strict Mode 모드를 사용하는 개발환경에서 두번 실행되는 것을 방지하여 한번만 호출하도록 구현되어 있습니다.

## useUnmount

```tsx
useUnmount(() => {
  console.log('Unmounted')
})
```

@en

- It is an effect that runs when the component is unmounted, similar to returning a cleanup function in useEffect. However, it is implemented to prevent it from being called twice in the development environment using Strict Mode, and to call it only once.

@ko

- useEffect의 cleanup 함수를 반환하는 것과 같이 컴포넌트가 언마운트될 때 실행되는 효과입니다. 다만, Strict Mode 모드를 사용하는 개발환경에서 두번 실행되는 것을 방지하여 한번만 호출하도록 구현되어 있습니다.

## useUpdate

```tsx
  const [count, setCount] = useState(0)

  useUpdate(() => {
    console.log('Updated')
  }, [count])
```

@en

- This effect runs whenever the specified state variables in the dependency array change, similar to using useEffect with state variables in its dependency array. It is implemented to prevent double execution in development environments using Strict Mode, ensuring it is called only once. [^1][^2]

@ko

- useEffect의 의존성 배열에 상태 변수를 넣은 것과 같이 해당 상태가 변경될 때마다 실행되는 효과입니다. 다만, Strict Mode 모드를 사용하는 개발환경에서 두번 실행되는 것을 방지하여 한번만 호출하도록 구현되어 있습니다.

## useMountBeforePaint

```tsx
useMountBeforePaint(() => {
  console.log('Before paint')
})
```

@en

- It is an effect that runs before the browser paints the screen, similar to using an empty array in the dependency array of useLayoutEffect. However, it is implemented to prevent it from being called twice in the development environment using Strict Mode, and to call it only once.

@ko

- useLayoutEffect의 의존성 배열에 빈배열을 넣은 것과 같이 브라우저가 화면을 그리기 전에 마운트될 때 실행되는 효과입니다. 다만, Strict Mode 모드를 사용하는 개발환경에서 두번 실행되는 것을 방지하여 한번만 호출하도록 구현되어 있습니다.

## useUnmountBeforePaint

```tsx
useUnmountBeforePaint(() => {
  console.log('Before paint unmount')
})
```

@en

- It is an effect that runs when the component is unmounted before the browser paints the screen, similar to returning a cleanup function in useLayoutEffect. However, it is implemented to prevent it from being called twice in the development environment using Strict Mode, and to call it only once.

@ko

- useLayoutEffect의 cleanup 함수를 반환하는 것과 같이 브라우저가 화면을 그리기 전에 컴포넌트가 언마운트될 때 실행되는 효과입니다. 다만, Strict Mode 모드를 사용하는 개발환경에서 두번 실행되는 것을 방지하여 한번만 호출하도록 구현되어 있습니다.

## useUpdateBeforePaint

```tsx
useUpdateBeforePaint(() => {
  console.log('Before paint update')
}, [count])
```

@en

- This effect runs whenever the specified state variables in the dependency array change, similar to using useLayoutEffect with state variables in its dependency array. It is implemented to prevent double execution in development environments using Strict Mode, ensuring it is called only once.

@ko

- useLayoutEffect의 의존성 배열에 상태 변수를 넣은 것과 같이 해당 상태가 변경될 때마다 실행되는 효과입니다. 다만, Strict Mode 모드를 사용하는 개발환경에서 두번 실행되는 것을 방지하여 한번만 호출하도록 구현되어 있습니다.


## useMonitoringState

```tsx
useMonitoringState(count)
```

@en

- This effect logs the previous and new values of a state variable whenever it changes. The output format is similar to that of `redux-logger`.

@ko

- 상태변수가 변경될 때마다 이전 값과 새로운 값을 로그로 출력하는 효과입니다. `redux-logger`와 유사한 형태로 출력됩니다.

---

## build size

```sh
CJS dist/index.cjs 1.46 KB
CJS ⚡️ Build success in 85ms
ESM dist/index.js 1.34 KB
ESM ⚡️ Build success in 87ms
DTS Build start
DTS ⚡️ Build success in 1781ms
DTS dist/index.d.ts  2.02 KB
DTS dist/index.d.cts 2.02 KB
```

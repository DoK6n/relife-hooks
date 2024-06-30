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

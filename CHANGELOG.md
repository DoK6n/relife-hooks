## 0.8.0

### Notable Changes

- Lifecycle hooks to only trigger once in StrictMode and not Development environment

- useMountBeforePaint : Effect that runs before browser paints screen
- useUpdateBeforePaint : Effect that runs before the browser updates the screen before painting
- useUnmountBeforePaint : Effect that runs when the component unmounts before browser paints screen

- useMount : Effect that runs when the component mounts
- useUnmount : Effect that runs when the component unmounts
- useUpdate : Effect that runs when the component updates

- useMonitoringState : Effect that logs the previous and new values of the state variable
- utils : hasDeps, env

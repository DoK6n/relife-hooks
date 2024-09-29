import { CSSProperties } from 'react'

export const styler = <T extends string>(
  styles: Record<T, CSSProperties>,
): Record<T, CSSProperties> => styles

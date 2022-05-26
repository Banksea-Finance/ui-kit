import { CSSProperties } from 'react'
import { Colors } from './colors'
import { BreakpointKeys } from './breakpoints'
import { ResponsiveValue as _ResponsiveValue } from 'styled-system'

export type VariableKeys = 'color' | 'background'

export type MaybeVariableCSSProperty<Key extends keyof CSSProperties> = Key extends VariableKeys ? (keyof Colors | CSSProperties[Key]): CSSProperties[Key]

export type ResponsiveValue<Key extends keyof CSSProperties> = _ResponsiveValue<MaybeVariableCSSProperty<Key>, { breakpoints: Record<BreakpointKeys | '_', any> }>

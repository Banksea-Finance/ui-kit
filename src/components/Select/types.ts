import { DefaultTheme } from 'styled-components'
import { Scales, Variants } from '../../types'
import { SelectProps as RcSelectProps } from 'rc-select'
import { LayoutProps, WidthProps } from 'styled-system'

export interface SelectProps<Value> extends RcSelectProps<Value>, WidthProps, LayoutProps {
  scale?: Scales
  variant?: Variants
}

export interface StyledSelectProps<Value> extends SelectProps<Value> {
  theme: DefaultTheme
}

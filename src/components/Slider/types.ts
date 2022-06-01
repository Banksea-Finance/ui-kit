import { SliderUnstyledProps } from '@mui/base'
import { PickCSSProperties, Variants } from '../../types'
import { DefaultTheme } from 'styled-components'

export interface SliderProps extends SliderUnstyledProps {
  variant?: Variants

  // Show tooltip when hover on thumb, default `true`
  tooltip?: boolean
}

export interface StyledSliderProps extends SliderProps {
  theme: DefaultTheme
}

export type SliderOverridableCSSProperties =
  | PickCSSProperties<'opacity'>
  | 'trackColor'
  | 'trackDisabledColor'
  | 'trackHeight'
  | 'trackBorderRadius'
  | 'railColor'
  | 'railHeight'
  | 'railBorderRadius'
  | 'railOpacity'
  | 'markSize'
  | 'markBorderRadius'
  | 'markColor'
  | 'markActiveColor'
  | 'markOpacity'
  | 'markLabelFontSize'
  | 'markLabelTop'
  | 'markLabelColor'
  | 'markLabelActiveColor'
  | 'thumbBorder'
  | 'thumbBackgroundColor'

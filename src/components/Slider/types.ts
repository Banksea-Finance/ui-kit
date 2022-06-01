import { SliderUnstyledProps } from '@mui/base'
import { PickCSSProperties, Variants } from '../../types'
import { DefaultTheme } from 'styled-components'

export interface SliderProps extends SliderUnstyledProps {
  variant?: Variants
}

export interface StyledSliderProps extends SliderProps {
  theme: DefaultTheme
}

export type SliderOverridableCSSProperties =
  | PickCSSProperties<'height' | 'opacity' | 'padding'>
  | 'trackColor'
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

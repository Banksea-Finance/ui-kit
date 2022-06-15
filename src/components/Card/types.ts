import React, { CSSProperties, HTMLAttributes } from 'react'
import { DisplayProps, FlexboxProps, LayoutProps, OverflowProps, SpaceProps, TypographyProps } from 'styled-system'
import { Colors, PickCSSProperties, PropsWithTheme, Variants } from '../../types'
import { TextProps } from '../Text'
import { DefaultTheme } from 'styled-components'

export type CardRibbonPosition = 'topLeft' | 'topRight'

export interface CardRibbonProps {
  variant?: Variants
  text: string
  textStyle?: TextProps
  position?: CardRibbonPosition
}

export interface CardProps
  extends DisplayProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'title'>,
    TypographyProps,
    OverflowProps {

  plain?: boolean
  ribbon?: React.ReactNode
  activeOnHover?: boolean

  variant?: Variants
  activeVariant?: Variants
  backgroundColor?: keyof Colors | CSSProperties['color']
  color?: keyof Colors | CSSProperties['color']
}

export interface StyledCardProps extends CardProps, PropsWithTheme {}

export interface StyledCardRibbonProps extends Pick<CardRibbonProps, 'variant' | 'position'> {
  theme: DefaultTheme
}
export type CardOverridableCSSProperties = PickCSSProperties<'boxShadow' | 'backgroundColor' | 'border' | 'borderRadius'>

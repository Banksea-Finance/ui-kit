import { HTMLAttributes, ReactNode } from 'react'
import {
  AlignItemsProps,
  BorderProps,
  FlexboxProps,
  FlexWrapProps,
  GridProps as _GridProps,
  JustifyContentProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from 'styled-system'
import { ResponsiveValue } from '../../types'

export interface BoxProps
  extends /*Omit<BackgroundProps, 'background'>,*/
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {

  background?: ResponsiveValue<'background'>
  children?: ReactNode | ReactNode[]
}

export interface FlexProps extends BoxProps, FlexboxProps {
  ai?: AlignItemsProps['alignItems']
  jc?: JustifyContentProps['justifyContent']
  wrap?: FlexWrapProps['flexWrap']
  gap?: ResponsiveValue<'gap'>
}

export interface GridProps extends FlexProps, _GridProps {
}

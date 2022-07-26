import { BordersProps, HeightProps, LayoutProps, PositionProps, SpaceProps, WidthProps } from 'styled-system'
import { PropsWithTheme } from '../../types'
import { ImgHTMLAttributes, ReactNode } from 'react'

type ImagePlaceHolderBuilder = (width?: any, height?: any) => ReactNode

export interface ImageProps extends SpaceProps, LayoutProps, PositionProps, BordersProps, Omit<ImgHTMLAttributes<any>, 'width' | 'height' | 'placeholder'> {
  placeholder?: ImagePlaceHolderBuilder
  placeholderHeight?: HeightProps['height']
  placeholderWidth?: WidthProps['width']
}

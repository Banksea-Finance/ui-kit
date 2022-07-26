import { BordersProps, LayoutProps, PositionProps, SpaceProps } from 'styled-system'
import { PropsWithTheme } from '../../types'

export interface ImageProps extends SpaceProps, LayoutProps, PositionProps, BordersProps {

}

export interface StyledImageProps extends ImageProps, PropsWithTheme {

}

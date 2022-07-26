import styled from 'styled-components'
import { borders, layout, position, space } from 'styled-system'
import { StyledImageProps } from './types'

export const StyledImage = styled.img<StyledImageProps>`
  ${space}
  ${layout}
  ${position}
  ${borders}
`

import styled from 'styled-components'
import { border, layout, position, space, system } from 'styled-system'
import { BoxProps } from './types'
import { getThemeValue } from '../../utils'

const Box = styled.div<BoxProps>`
  ${({ theme }) => system({
    background: {
      property: 'background',
      transform: value => getThemeValue(`colors.${value}`, value)(theme)
    },
  })}
  
  ${border}
  ${layout}
  ${position}
  ${space}
`

export default Box

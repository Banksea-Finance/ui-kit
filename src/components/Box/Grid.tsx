import styled from 'styled-components'
import { grid } from 'styled-system'
import Flex from './Flex'
import { GridProps } from './types'

const Grid = styled(Flex)<GridProps>`
  display: grid;
  
  ${grid};
`

export default Grid

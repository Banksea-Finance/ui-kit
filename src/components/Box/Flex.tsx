import styled from 'styled-components'
import { flexbox, system } from 'styled-system'
import Box from './Box'
import { FlexProps } from './types'

const Flex = styled(Box)<FlexProps>`
  display: flex;

  ${flexbox};

  ${system({
    jc: { property: 'justifyContent' },
    ai: { property: 'alignItems' },
    wrap: { property: 'flexWrap' },
    gap: { property: 'gap' }
  })}
`

export default Flex

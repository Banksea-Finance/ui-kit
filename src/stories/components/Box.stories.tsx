import React from 'react'
import { Box, Button, Flex } from '../../components'
import * as _ from 'lodash'

export default {
  title: 'Components/Box',
  component: Button,
  argTypes: {},
}

export const Default = () => (
  <Box>
    <Flex
      jc={{ xl: 'space-between', md: 'center', xs: 'space-between', _: 'space-between' }}
      ai={{ xl: 'start', md: 'center', xs: 'end', _: 'end' }}
      border={'1px solid yellow'}
      mb={'32px'}
      width={600}
      height={'150px'}
    >
      {
        _.range(5).map((o, i) => (
          <Box
            key={i}
            width={100}
            height={100}
            background={{ xl: 'primary', md: 'warning', xs: 'success', _: 'success' }}
            border={'1px solid green'}
          />
        ))
      }
    </Flex>

    <Flex width={'50vw'} jc={'start'} wrap={'wrap'} gap={'16px'}>
      {
        _.range(10).map(o => (
          <Box key={o} width={100} height={100} background={'primary'} border={'1px solid green'} />
        ))
      }
    </Flex>
  </Box>
)

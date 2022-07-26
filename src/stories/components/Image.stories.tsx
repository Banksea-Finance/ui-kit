import React from 'react'
import { Box, Flex, Image } from '../../components'

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {},
}

export const Default = () => (
  <Flex p={'16px'} width={'500px'} height={'500px'} jc={'center'} ai={'center'}>
    <Image src={'https://l7kv7ogxtpu4nk4ck3mgnknf5atwqmauy63vmjjcnfjygxtm.arweave.net/X9V_fuNeb6carglb-YZqml6CdoMBTHt1YlIm-lTg15s?ext=png'} width={'64px'} height={'64px'} borderRadius={'50%'} />
  </Flex>
)


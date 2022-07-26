import React from 'react'
import { Box, Flex, Image } from '../../components'

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {},
}

export const Default = () => {
  const src1 = 'https://l7kv7ogxtpu4nk4ck3mgnknf5atwqmauy63vmjjcnfjygxtm.arweave.net/X9V_fuNeb6carglb-YZqml6CdoMBTHt1YlIm-lTg15s?ext=png'
  const src2 = 'https://i.imgur.com/fO3tI1t.png'

  return (
    <Flex
      p={'16px'}
      width={'500px'}
      height={'500px'}
      jc={'center'}
      ai={'center'}
      border={'1px solid darkred'}
      position={'relative'}
    >
      <Image
        src={src1}
        width={'64px'}
        height={'64px'}
        borderRadius={'50%'}
      />

      <Image
        src={src2}
        width={'64px'}
        height={'64px'}
        position={'absolute'}
        right={'10px'}
        top={'10px'}
      />
    </Flex>
  )
}


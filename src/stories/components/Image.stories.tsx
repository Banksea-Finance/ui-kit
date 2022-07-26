import React from 'react'
import { Box, Image } from '../../components'

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {},
}

export const Default = () => (
  <Box p={'16px'}>
    <Image src={'https://cdnb.artstation.com/p/assets/images/images/051/247/745/4k/wlop-33se.jpg?1656829473'} width={{ _: '90vw', xl: '648px' }} placeholderHeight={'600px'} />
  </Box>
)


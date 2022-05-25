import React from 'react'
import { Button, Text } from '../components'
import { useMatchBreakpoints, useScale } from '../hooks'
import { scales } from '../types'

export default {
  title: 'Hooks/useScale',
  argTypes: {},
}

export const Default = () => {
  const matchBreakpoints = useMatchBreakpoints()
  const scale1 = useScale()
  const scale2 = useScale({ isMd: scales.S, isLg: scales.S })

  return (
    <div>
      <Text>{JSON.stringify(matchBreakpoints)}</Text>
      <Button scale={scale1}>
        Scale: {scale1}
      </Button>
      <Button scale={scale2}>
        Scale: {scale2}
      </Button>
    </div>
  )
}

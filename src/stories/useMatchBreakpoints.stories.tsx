import React from 'react'
import { Button, Text } from '../components'
import { useMatchBreakpoints } from '../hooks'

export default {
  title: 'Hooks/useMatchBreakpoints',
  argTypes: {},
}

export const Default = () => {
  const matchBreakpoints = useMatchBreakpoints()

  return (
    <div>
      <Text>{JSON.stringify(matchBreakpoints)}</Text>
      <Button width={{ xs: '100px', sm: '200px', md: '300px', lg: '400px', xl: '500px', default: '800px' }}>
        Responsive width
      </Button>
    </div>
  )
}

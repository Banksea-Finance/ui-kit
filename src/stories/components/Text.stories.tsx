import React from 'react'

import { Grid, Text, variants } from '../../index'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {},
}

export const Colors = () => (
  <Grid gridGap={'32px'} p={'32px'}>
    <Grid gridGap={'16px'} gridTemplateColumns={'repeat(3, max-content)'}>
      {
        Object.values(variants).map(v => (
          <Text textAlign={'center'} color={v} fontSize={{ xl: '24px', lg: '20px', xs: '12px' }} key={v} important textTransform={'uppercase'}>{v}</Text>
        ))
      }
    </Grid>
  </Grid>
)

export const Gradients = () => (
  <Grid gridGap={'32px'} p={'32px'}>
    <Text important fontSize={'64px'} gradient>
      Default Gradient
    </Text>

    <Text important fontSize={'64px'} gradient={'linear-gradient(90deg, #7864E6 0%, #D25AE6 30%)'}>
      Custom Gradient
    </Text>
  </Grid>
)

export const Importance = () => (
  <Grid gridGap={'16px'} p={'32px'}>
    <Text fontSize={'32px'} gradient>
      Common
    </Text>

    <Text important fontSize={'32px'} gradient>
      Important
    </Text>
  </Grid>
)


export const Mixed = () => (
  <Grid gap={'16px'} p={'32px'}>
    <Text fontSize={'32px'}>
      <span className="primary">Here </span>
      <span className="secondary">is </span>
      <span className="primaryContrary">a </span>
      <span className="gradient">colorful </span>
      <span className="subtle">sentence </span>
    </Text>

  </Grid>
)

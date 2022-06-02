import React from 'react'
import { upperFirst } from 'lodash'
import { Button, Grid, Tag } from '../../components'
import { scales, variants } from '../../types'

export default {
  title: 'Components/Tag',
  component: Button,
  argTypes: {},
}

export const Scales = () => {
  return (
    <Grid p={'32px'} gridGap={'8px'} gridTemplateColumns={'repeat(3, max-content)'} alignItems={'end'}>
      {
        Object.values(scales).map(scale => (
          <Tag scale={scale} key={scale}>
            Scale {scale} Tag
          </Tag>
        ))
      }
    </Grid>
  )
}

export const Variants = () => {
  return (
    <Grid p={'32px'} gridGap={'16px'} gridTemplateColumns={'repeat(5, max-content)'}>
      {
        Object.values(variants).map(v => (
          <Tag variant={v} key={v}>
            {upperFirst(v)} Tag
          </Tag>
        ))
      }
    </Grid>
  )
}

export const Outlined = () => {
  return (
    <Grid p={'32px'} gridGap={'16px'} gridTemplateColumns={'repeat(5, max-content)'}>
      {
        Object.values(variants).map(v => (
          <Tag variant={v} key={v} outlined>
            Outlined {upperFirst(v)} Tag
          </Tag>
        ))
      }
    </Grid>
  )
}

export const Gradients = () => (
  <Grid p={'16px'} gridGap={'32px'} gridTemplateColumns={'repeat(3, max-content)'} ai={'center'}>
    {
      Object.values(scales).map(scale => (
        <Tag gradient scale={scale} key={`default-${scale}`}>
          Default Gradient
        </Tag>
      ))
    }
    {
      Object.values(scales).map(scale => (
        <Tag scale={scale} gradient={'linear-gradient(270deg, #7864E6 0%, #D25AE6 30%)'} key={`custom-${scale}`}>
          Custom Gradient
        </Tag>
      ))
    }

  </Grid>
)

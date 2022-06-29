import React, { useState } from 'react'

import { Grid, Scales, scales, Select, Text } from '../../index'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
}

export const Default = () => {
  const [value, setValue] = useState(1)

  return (
    <Grid p={'32px'} gridGap={'8px'} width={'350px'} >
      <Text>Selected value: {value}</Text>
      <Select value={value} onChange={v => setValue(v as any)}>
        <Select.Option value={1}>Option 1</Select.Option>
        <Select.Option value={2}>Option 2</Select.Option>
        <Select.Option value={3} disabled>Option 3</Select.Option>
        <Select.Option value={4}>Option 4</Select.Option>
      </Select>
    </Grid>
  )
}

export const _Scales = () => {
  const [value, setValue] = useState(1)

  // const widthByScale: Record<Scales, string> = {
  //   'S': 'fit-content',
  //   'M': '120px',
  //   'L': '250px',
  // }

  return (
    <Grid p={'32px'} gridGap={'8px'} width={'350px'} >
      {
        Object.keys(scales).map(scale => (
          <Select
            value={value}
            onChange={v => setValue(v as any)}
            scale={scale as Scales}
            key={scale}
          >
            <Select.Option value={1}>Option 1</Select.Option>
            <Select.Option value={2}>Option 2</Select.Option>
            <Select.Option value={3} disabled>Option 3</Select.Option>
            <Select.Option value={4}>Option 4</Select.Option>
          </Select>
        ))
      }
    </Grid>
  )
}

export const CustomWidth = () => {
  const [value, setValue] = useState(1)

  // const widthByScale: Record<Scales, string> = {
  //   'S': 'fit-content',
  //   'M': '120px',
  //   'L': '250px',
  // }

  return (
    <Grid p={'32px'} gridGap={'8px'} width={'350px'} >
      {
        ['fit-content', '120px', '250px'].map(width => (
          <Select
            value={value}
            onChange={v => setValue(v)}
            width={width}
            key={width}
          >
            <Select.Option value={1}>Here is a so~~~~~~~~ long option</Select.Option>
            <Select.Option value={2}>Option 2</Select.Option>
            <Select.Option value={3} disabled>Option 3</Select.Option>
            <Select.Option value={4}>Option 4</Select.Option>
          </Select>
        ))
      }
    </Grid>
  )
}

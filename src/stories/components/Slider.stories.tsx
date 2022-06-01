import React from 'react'
import { Box, Button, Text, Slider } from '../../components'
import { variants } from '../../types'

export default {
  title: 'Components/Slider',
  component: Button,
  argTypes: {},
}

// function ValueLabelComponent(props: {
//   children: React.ReactElement;
//   value: number;
// }) {
//   const { children, value } = props
//
//   return (
//     <Tooltip enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   )
// }

export const Variants = () => (
  <Box width={'300px'} p={'16px'} height={'100px'}>
    {
      Object.values(variants).map((v, index) => (
        <Slider
          valueLabelDisplay={'auto'}
          variant={v}
          key={v}
          defaultValue={(index + 1) * 10}
          tooltip
        />
      ))
    }
  </Box>
)

export const Disabled = () => (
  <Box width={'300px'} p={'16px'} height={'100px'}>
    <Slider defaultValue={50} step={10} marks disabled />
  </Box>
)

export const Discrete = () => (
  <Box width={'300px'} p={'16px'} height={'100px'}>
    <Slider defaultValue={50} step={10} marks />
  </Box>
)

export const CustomMarks = () => {
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ]

  return (
    <Box width={'300px'} p={'16px'} height={'100px'}>
      <Slider defaultValue={37} marks={marks} />
    </Box>
  )
}

export const RestrictedValues = () => {
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ]

  return (
    <Box width={'300px'} p={'16px'} height={'100px'}>
      <Slider defaultValue={37} marks={marks} step={null} />
    </Box>
  )
}

export const RangeSlider = () => {
  const [value, setValue] = React.useState<number[]>([20, 37])

  return (
    <Box width={300} p={'16px'}>
      <Slider
        value={value}
        onChange={(event: Event, newValue: number | number[]) => {
          setValue(newValue as number[])
        }}
        min={0}
        max={100}
      />
      <Text>
        Value: {JSON.stringify(value)}
      </Text>
    </Box>
  )
}

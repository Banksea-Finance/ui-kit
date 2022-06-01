import React from 'react'
import { StyledSlider } from './StyledSlider'
import { SliderProps } from './types'

export const Slider: React.FC<SliderProps> = ({ tooltip, ...props }) => {
  return (
    <StyledSlider {...props} tooltip={tooltip} valueLabelDisplay={tooltip ? 'auto' : 'off'} />
  )
}

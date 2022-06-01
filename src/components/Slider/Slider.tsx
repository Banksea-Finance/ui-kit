import React from 'react'
import { StyledSlider } from './StyledSlider'
import { SliderProps } from './types'

export const Slider: React.FC<SliderProps> = props => {
  return (
    <StyledSlider {...props} />
  )
}

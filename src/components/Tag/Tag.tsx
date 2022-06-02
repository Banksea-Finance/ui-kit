import React from 'react'
import { TagProps } from './types'
import { StyledTag } from './StyledTag'

export const Tag: React.FC<TagProps> = ({ startIcon, endIcon, children, scale = 'M', ...props }) => {
  return (
    <StyledTag scale={scale} {...props}>
      {
        React.isValidElement(startIcon) && React.cloneElement(startIcon, {
          mr: '4px'
        })
      }

      {children}

      {
        React.isValidElement(endIcon) && React.cloneElement(endIcon, {
          ml: '4px'
        })
      }
    </StyledTag>
  )
}

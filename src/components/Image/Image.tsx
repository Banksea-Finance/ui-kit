import styled from 'styled-components'
import { borders, layout, position, space } from 'styled-system'
import { ImageProps } from './types'
import React, { useState } from 'react'
import { Skeleton } from '../Skeleton'
import { Box } from '../Box'

const StyledImage = styled.img<ImageProps>`
  ${space}
  ${layout}
  ${position}
  ${borders}
`

const defaultPlaceholder = (width?: any, height?: any) => <Skeleton width={width} height={height} />

export const Image: React.FC<ImageProps> = ({
  src, placeholder = defaultPlaceholder, height, width, placeholderWidth, placeholderHeight, ...restProps
}) => {
  const [loading, setLoading] = useState(true)

  return (
    <Box width={loading ? placeholderWidth || width : width} height={loading ? placeholderHeight || height : height}>
      <StyledImage
        {...restProps}
        src={src}
        onLoad={() => setLoading(false)}
        height={height as any}
        width={width as any}
        display={!loading ? 'unset' : 'none'}
      />

      {loading && (
        React.cloneElement(placeholder(placeholderWidth || width, placeholderHeight || height) as any, {
          style: {
            position: 'absolute',
            top: 0,
            left: 0
          }
        })
      )}
    </Box>
  )
}

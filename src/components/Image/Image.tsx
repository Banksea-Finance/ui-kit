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

const defaultPlaceholder = (width?: any, height?: any, borderRadius?: any) => (
  <Skeleton width={width} height={height} borderRadius={borderRadius} />
)

export const Image: React.FC<ImageProps> = ({
  src,
  placeholder = defaultPlaceholder,
  height,
  width,
  borderRadius,
  placeholderWidth,
  placeholderHeight,
  position, top, left, bottom, right,
  ...restProps
}) => {
  const [loading, setLoading] = useState(true)

  return loading ? (
    <Box
      width={loading ? placeholderWidth || width : width}
      height={loading ? placeholderHeight || height : height}
      position={position}
      {...{ top, left, bottom, right }}
    >
      <StyledImage
        {...restProps}
        src={src}
        onLoad={() => setLoading(false)}
        height={height as any}
        width={width as any}
        display={!loading ? 'unset' : 'none'}
        borderRadius={borderRadius}
      />

      <Box position={'relative'}>
        {loading && (
          React.cloneElement(placeholder(placeholderWidth || width, placeholderHeight || height, borderRadius) as any, {
            style: {
              position: 'absolute',
              top: 0,
              left: 0
            }
          })
        )}
      </Box>
    </Box>
  ) : (
    <StyledImage
      {...restProps}
      src={src}
      onLoad={() => setLoading(false)}
      height={height as any}
      width={width as any}
      display={!loading ? 'unset' : 'none'}
      borderRadius={borderRadius}
      {...{ position, top, left, bottom, right }}
    />
  )
}

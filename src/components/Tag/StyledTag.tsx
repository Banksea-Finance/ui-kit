import styled from 'styled-components'
import { space, typography, variant } from 'styled-system'
import { scaleVariants } from './theme'
import { StyledTagProps } from './types'
import { getOverridableStyle } from '../../utils'
import { Box } from '../Box'

const getColor = getOverridableStyle('Tag', 'color', ({ outlined, theme, variant = 'primary', gradient }) => {
  if (gradient) return theme.colors.text
  return outlined ? theme.colors[variant] : theme.colors.text
})

const getBackground = getOverridableStyle('Tag', 'background', ({ gradient, outlined, theme, variant = 'primary' }) => {
  if (gradient) {
    if (gradient === true) return theme.colors.gradient

    return gradient
  }

  return outlined ? theme.colors.backgroundSecondary : theme.colors[variant]
})

const getBorder = getOverridableStyle('Tag', 'border', ({ outlined, theme, variant = 'primary' }) => {
  return outlined ? `1px solid ${theme.colors[variant]}` : ''
})

export const StyledTag = styled(Box)<StyledTagProps>`
  align-items: center;
  display: inline-flex;
  font-weight: 500;
  white-space: nowrap;
  width: fit-content;
  font-family: ${({ theme }) => theme.fontFamilies.common};

  color: ${getColor};
  background: ${getBackground};
  border: ${getBorder};
  
  & > svg {
    fill: currentColor;
  }

  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}

  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}
  ${space}
  ${typography}
`

import styled from 'styled-components'
import { layout, space, typography } from 'styled-system'
import { getOverridableStyle, getThemeValue } from '../../utils'
import { StyledTextProps, TextProps } from './types'

const getColor = getOverridableStyle('Text', 'color', ({ color = 'text', theme }) => {
  return getThemeValue(`colors.${color}`, color)(theme)
})

const getFontFamily = getOverridableStyle('Text', 'fontFamily', ({ important, theme }) => {
  return important ? theme.fontFamilies.important : theme.fontFamilies.common
})

const getFontWeight = getOverridableStyle('Text', 'fontWeight', ({ bold, important }) => {
  return (bold ? 700 : (important ? 400 : 500))
})

const getLineHeight = getOverridableStyle('Text', 'lineHeight', () => '1.5')

const getGradient = ({ gradient, theme }: StyledTextProps) => {
  if (gradient) {
    const background = gradient === true ? theme.colors.gradient : gradient

    return `
      background: ${background};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
  }
}

const Text = styled.div<TextProps>`
  color: ${getColor};
  font-family: ${getFontFamily};
  font-weight: ${getFontWeight};
  line-height: ${getLineHeight};

  ${({ theme }) => Object.entries(theme.colors).map(([key, value]) => `
    .${key} { color: ${value}; }
  `)};

  .gradient {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  text-transform: ${({ textTransform }) => textTransform};

  ${getGradient}

  ${space};
  ${layout};
  ${typography};
`

Text.defaultProps = {
  color: 'text',
  fontSize: '16px'
}

export { Text }

import styled from 'styled-components'
import { display, flexbox, layout, overflow, space, typography } from 'styled-system'
import { StyledCardProps } from './types'
import { getOverridableStyle, getThemeValue } from '../../utils'

const getBoxShadow = getOverridableStyle('Card', 'boxShadow', ({ activeOnHover, plain, theme, variant = 'primary', activeVariant }) => {
  if (plain) {
    return ''
  }

  const color = `${theme.colors[activeVariant || variant]}42`

  if (activeOnHover) {
    return `
      box-shadow: none;
      
      &:hover {
        box-shadow: 0px 0px 4px 4px ${color};
      }
    `
  }

  return `box-shadow: 0px 0px 4px 4px ${color};`
})

const getBackgroundColor = getOverridableStyle('Card', 'backgroundColor', ({ backgroundColor, theme }) => {
  return getThemeValue(`colors.${backgroundColor}`, backgroundColor)(theme)
})

const getBorder = getOverridableStyle('Card', 'border', ({ activeOnHover, activeVariant, variant = 'primary', theme }: StyledCardProps) => {
  if (activeOnHover) {
    return `
      border: 1px solid ${theme.colors[variant]};
      
      &:hover {
        border: 1px solid ${theme.colors[activeVariant || variant]};
      }
    `
  }

  return `border: 1px solid ${theme.colors[variant]}`
})

const getBorderRadius = getOverridableStyle('Card', 'borderRadius', () => '32px')

const getColor = ({ theme, color }: StyledCardProps) => getThemeValue(`colors.${color}`, color)(theme)

const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  ${flexbox};

  overflow: hidden;
  position: relative;
  transition: all 0.28s;

  color: ${getColor};
  background-color: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  
  ${getBorder};
  ${getBoxShadow};

  ${space}
  ${layout}
  ${display}
  ${overflow}
  ${typography}
`

export default StyledCard

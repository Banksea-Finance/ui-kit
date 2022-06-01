import styled from 'styled-components'
import { InputProps } from './types'
import { layout, space } from 'styled-system'
import { scales } from '../../types'
import { getOverridableStyle } from '../../utils'
import { InputUnstyled, inputUnstyledClasses } from '@mui/base'

const getHeight = getOverridableStyle(
  'Input',
  'height', ({ scale = scales.M }) => (
    {
      [scales.S]: '32px',
      [scales.M]: '40px',
      [scales.L]: '48px',
    }[scale]
  )
)

const getBorderRadius = getOverridableStyle(
  'Input',
  'borderRadius',
  ({ scale = scales.M }) => (
    {
      [scales.S]: '4px',
      [scales.M]: '5px',
      [scales.L]: '6px',
    }[scale]
  )
)

const getFontSize = getOverridableStyle(
  'Input',
  'fontSize',
  ({ scale = scales.M }) => (
    {
      [scales.S]: '14px',
      [scales.M]: '16px',
      [scales.L]: '18px',
    }[scale]
  )
)

const getColors = getOverridableStyle('Input', 'color', ({ theme }) => theme.colors.text)

const getFocusBoxShadow = getOverridableStyle('Input', 'focusBoxShadow', ({ theme, variant = 'primary' }) => `0px 0px 10px 1px ${theme.colors[variant]}`)

const StyledInput = styled(InputUnstyled)<InputProps>`
  display: flex;
  align-items: center;
  
  border-radius: ${getBorderRadius};
  color: ${getColors};
  font-size: ${getFontSize};
  height: ${getHeight};

  border: ${getOverridableStyle('Input', 'border', ({ theme, variant = 'primary', disabled }) => !disabled ? `1px solid ${theme.colors[variant]}` : 'none')};
  box-shadow: ${getOverridableStyle('Input', 'boxShadow', 'none')};
  background: ${getOverridableStyle('Input', 'background', ({ theme }) => theme.colors.backgroundSecondary)};
  outline: ${getOverridableStyle('Input', 'outline', '0')};
  font-weight: ${getOverridableStyle('Input', 'fontWeight', '500')};
  padding: ${getOverridableStyle('Input', 'padding', '0 8px')};

  font-family: ${({ theme }) => theme.fontFamilies.common};
  padding-right: ${({ suffixGap }) => suffixGap};
  
  &.${inputUnstyledClasses.disabled} {
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    color: ${({ theme }) => theme.colors.textDisabled};

    & > * {
      cursor: not-allowed;
    }
  }

  &.${inputUnstyledClasses.focused} {
    border: ${getOverridableStyle('Input', 'focusBorder', ({ theme, variant = 'primary' }) => `1px solid ${theme.colors[variant]}cc`)};
    box-shadow: ${getFocusBoxShadow};
  }
  
  &.${inputUnstyledClasses.adornedEnd} {
    // disable click effect of Button components 
    button:active:not(:disabled) {
      transform: none;
    }
  }

  input {
    background: transparent;
    border: none;
    flex-grow: 1;
    font-weight: ${getOverridableStyle('Input', 'fontWeight', '500')};
    color: ${getColors};
    font-family: inherit;
    font-size: ${getFontSize};

    &:focus-visible {
      outline: none;
    }
    
    &::placeholder {
      color: ${getOverridableStyle('Input', 'placeholderColor', ({ theme }) => theme.colors.textDisabled)};
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  input[type=number] {
    -moz-appearance: textfield;
  }

  ${layout}
  ${space}
`

export default StyledInput

import React from 'react'
import styled from 'styled-components'
import { CardRibbonPosition, CardRibbonProps, StyledCardRibbonProps } from './types'
import { Text } from '../Text'
import { variants } from '../../types'
import { variant } from 'styled-system'

const positionVariants: Record<CardRibbonPosition, any> = {
  topLeft: {
    'transform': 'translateX(-30%) translateY(0%) rotate(-45deg)',
    'transform-origin': 'top right',
    'top': '0',
    'left': '0'
  },
  topRight: {
    'transform': 'translateX(30%) translateY(0%) rotate(45deg)',
    'transform-origin': 'top left',
    'top': '0',
    'right': '0'
  }
}

const StyledCardRibbon = styled.div<StyledCardRibbonProps>`
  background-color: ${({ variant = variants.primary, theme }) => theme.colors[variant]};
  color: white;
  margin: 0;
  padding: 8px 0;
  position: absolute;
  text-align: center;
  width: 96px;
  
  ${variant({
    prop: 'position',
    variants: positionVariants
  })}
  
  &:before,
  &:after {
    background-color: ${({ variant = variants.primary, theme }) => theme.colors[variant]};
    content: "";
    height: 100%;
    margin: 0 -1px; /* Removes tiny gap */
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 96px;
  }
`

const CardRibbon: React.FC<CardRibbonProps> = ({ variant, text, textStyle, position = 'topRight' }) => {
  return (
    <StyledCardRibbon variant={variant} position={position}>
      <Text {...textStyle}>{text}</Text>
    </StyledCardRibbon>
  )
}

export default CardRibbon

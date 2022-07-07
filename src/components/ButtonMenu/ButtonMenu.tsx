import React, { Children, cloneElement, ReactElement } from 'react'
import StyledButtonMenu from './StyledButtonMenu'
import { ButtonMenuProps } from './types'
import ButtonMenuItem from './ButtonMenuItem'
import { buttonVariants } from '../Button/types'
import { scales } from '../../types'

class ButtonMenu extends React.Component<ButtonMenuProps, any> {

  static Item = ButtonMenuItem

  render() {
    const {
      activeKey,
      activeIndex,
      scale = scales.M,
      variant = buttonVariants.primary,
      onItemClick,
      style,
      children,
      itemProps,
      ...rest
    } = this.props

    return (
      <StyledButtonMenu variant={variant} style={style} scale={scale} {...rest}>
        {
          Children.map(children, (child: ReactElement, index) => {
            return cloneElement(child, {
              ...Object.fromEntries(
                Object.entries(itemProps || {}).filter(([key]) => !(key in child.props))
              ),
              isActive: activeIndex === index || (activeKey && child.props.itemKey as string === activeKey),
              onClick: onItemClick ? () => onItemClick({ index, key: child.props.itemKey as string }) : undefined,
              scale,
              variant,
              circle: true,
            })
          })
        }
      </StyledButtonMenu>
    )
  }

}

export default ButtonMenu

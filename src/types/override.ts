import { ButtonOverridableCSSProperties, StyledButtonProps } from '../components/Button'
import { CardOverridableCSSProperties, StyledCardProps } from '../components/Card'
import { StyledTextProps, TextOverridableCSSProperties } from '../components/Text'
import { ButtonMenuOverridableCSSProperties, StyledButtonMenuProps } from '../components/ButtonMenu'
import { InputOverridableCSSProperties, StyledInputProps } from '../components/Input'
import { StyledTagProps, TagOverridableCSSProperties } from '../components/Tag'
import { SliderOverridableCSSProperties, StyledSliderProps } from '../components/Slider'
import { TableOverridableCSSProperties, StyledTableProps } from '../components/Table'

import * as components from '../components'
import { CSSProperties, DefaultTheme } from 'styled-components'

export type ComponentNames = keyof typeof components

export type PickCSSProperties<Key extends keyof CSSProperties> = keyof Pick<CSSProperties, Key>

export type PropsWithTheme = {
  theme: DefaultTheme
}

// type OverridablePropertiesByComponentConstraint<T extends Partial<Record<ComponentNames, {
//   properties: keyof CSSProperties | string | Record<string, any>
//   props: PropsWithTheme
// }>>> = T
type OverridablePropertiesByComponentConstraint<T extends Partial<Record<ComponentNames,
  {
    properties: keyof CSSProperties | string
    props: PropsWithTheme
  }>>> = T

export type OverridablePropertiesByComponent = OverridablePropertiesByComponentConstraint<{
  Button: {
    properties: ButtonOverridableCSSProperties
    props: StyledButtonProps
  },
  ButtonMenu: {
    properties: ButtonMenuOverridableCSSProperties,
    props: StyledButtonMenuProps
  },
  Card: {
    properties: CardOverridableCSSProperties
    props: StyledCardProps
  },
  Text: {
    properties: TextOverridableCSSProperties
    props: StyledTextProps
  },
  Input: {
    properties: InputOverridableCSSProperties,
    props: StyledInputProps
  },
  Tag: {
    properties: TagOverridableCSSProperties,
    props: StyledTagProps
  },
  Table: {
    properties: keyof TableOverridableCSSProperties,
    props: StyledTableProps<any>
  },
  Slider: {
    properties: SliderOverridableCSSProperties,
    props: StyledSliderProps
  }
}>

export type StyleBuilder<Key extends (keyof CSSProperties | string), ComponentProps> =
  | (Key extends keyof CSSProperties ? CSSProperties[Key] : string)
  | ((props: ComponentProps) => Key extends keyof CSSProperties ? CSSProperties[Key] : string)

export type ComponentStylesOverride = {
  [ComponentName in keyof OverridablePropertiesByComponent]?: {
    /*[Property in (
      OverridablePropertiesByComponent[ComponentName]['properties'] extends string
        ? OverridablePropertiesByComponent[ComponentName]['properties']
        : (
          keyof OverridablePropertiesByComponent[ComponentName]['properties'] extends string
            ? keyof OverridablePropertiesByComponent[ComponentName]['properties']
            : never
          )
      )]?: StyleBuilder<Property,*/
    [Property in OverridablePropertiesByComponent[ComponentName]['properties']]?: StyleBuilder<Property,
      OverridablePropertiesByComponent[ComponentName]['props']>
  }
}

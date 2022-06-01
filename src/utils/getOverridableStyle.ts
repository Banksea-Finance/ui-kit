import { ComponentStylesOverride, OverridablePropertiesByComponent } from '../types'
import { CSSProperties } from 'styled-components'

type OverridableComponentNames = keyof ComponentStylesOverride

type GetPropertiesByComponentName<ComponentName extends OverridableComponentNames> =
  keyof Required<ComponentStylesOverride>[ComponentName]

type ReturnType<ComponentName extends OverridableComponentNames, Property extends GetPropertiesByComponentName<ComponentName>> = Property extends keyof CSSProperties ? CSSProperties[Property] : string

type GetPropsByComponentName<ComponentName extends OverridableComponentNames> =
  OverridablePropertiesByComponent[ComponentName]['props']

type Fallback<ComponentName extends OverridableComponentNames, Property extends GetPropertiesByComponentName<ComponentName>> =
  | ((props: GetPropsByComponentName<ComponentName>) => ReturnType<ComponentName, Property>)
  | ReturnType<ComponentName, Property>

export function getOverridableStyle<
  ComponentName extends OverridableComponentNames,
  Property extends GetPropertiesByComponentName<ComponentName>
>(
  componentName: ComponentName,
  property: Property,
  fallback: Fallback<ComponentName, Property>
): (props: OverridablePropertiesByComponent[ComponentName]['props']) => ReturnType<ComponentName, Property> {
  // @ts-ignore
  return props => {
    if (props?.theme?.componentStylesOverride && componentName in props.theme.componentStylesOverride) {
      // @ts-ignore
      const override = props.theme.componentStylesOverride[componentName]?.[property]

      if (override) {
        if (typeof override === 'function') return override(props)

        return override
      }
    }

    if (typeof fallback === 'function') {
      return fallback(props)
    } else {
      return fallback
    }
  }
}

import { Breakpoints, MediaQueries, Shadows, Spacing, ZIndices } from '../types'
import { FontFamilies } from '../types/fontFamilies'

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080
}

const breakpoints: Breakpoints = Object.values(breakpointMap).map(breakpoint => `${breakpoint}px`)
// @ts-ignore
breakpoints.xs = breakpoints[0]
// @ts-ignore
breakpoints.sm = breakpoints[1]
// @ts-ignore
breakpoints.md = breakpoints[2]
// @ts-ignore
breakpoints.lg = breakpoints[3]
// @ts-ignore
breakpoints.xl = breakpoints[4]

const mediaQueries: MediaQueries = Object.fromEntries<string>(
  Object.entries(breakpoints).map(([k, v]) => [k, `@media screen and (min-width: ${v}px)`])
) as unknown as MediaQueries

export const shadows: Shadows = {
  level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  active: '0px 0px 4px 4px #19d69742',
  success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
  warning: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
  focus: '0px 0px 0px 1px #605bffcc, 0px 0px 0px 4px #605bff55;',
  inset: 'rgb(44 44 44 / 40%) -1px -2px 0px 0px inset',
}

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64]

const radii = {
  small: '4px',
  default: '16px',
  card: '32px',
  circle: '50%',
}

const zIndices: ZIndices = {
  dropdown: 10,
  modal: 100,
}

const fontFamilies: FontFamilies = {
  common: 'inherite',
  important: 'inherite'
}

export default {
  siteWidth: '1278px',
  navbarHeight: '170px',
  mobileNavbarHeight: '80px',
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
  fontFamilies
}

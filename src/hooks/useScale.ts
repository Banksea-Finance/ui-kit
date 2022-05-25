import { scales, Scales } from '../types'
import useMatchBreakpoints, { MatchBreakpoints } from './useMatchBreakpoints'
import { useMemo } from 'react'

export type ScaleByMatchBreakpoint = Record<keyof MatchBreakpoints, Scales>

export const useScale = (override?: Partial<ScaleByMatchBreakpoint>, unmatched = scales.L): Scales => {
  const matchBreakpoints = useMatchBreakpoints()

  const defaultScales: ScaleByMatchBreakpoint = {
    isXs: scales.S,
    isSm: scales.S,
    isMd: scales.M,
    isLg: scales.M,
    isXl: scales.L,
  }

  return useMemo(() => {
    const matched = Object.entries(matchBreakpoints).find(([, v]) => !!v)

    return matched
      ? { ...defaultScales, ...override }[matched[0]] as Scales
      : unmatched
  }, [matchBreakpoints])

}

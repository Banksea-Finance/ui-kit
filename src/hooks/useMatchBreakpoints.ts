import { useEffect, useState } from 'react'
import { breakpointMap } from '../configs/base'
import { BreakpointKeys, MediaQueries } from '../types'
import { capitalize } from 'lodash'

export type MatchBreakpoints = {
  [key in BreakpointKeys as `is${Capitalize<key>}`]: boolean;
};

const mediaQueries: MediaQueries = (() => {
  let prevMinWidth = 0

  return Object.keys(breakpointMap).reduce((result, size, index) => {
    if (index === Object.keys(breakpointMap).length - 1) {
      return { ...result, [size]: `(min-width: ${prevMinWidth}px)` }
    }

    const minWidth = prevMinWidth
    const breakpoint = breakpointMap[size as BreakpointKeys]

    // Min width for next iteration
    prevMinWidth = breakpoint + 1

    return { ...result, [size]: `(min-width: ${minWidth}px) and (max-width: ${breakpoint}px)` }
  }, {}) as MediaQueries
})()

const getKey = (size: string) => `is${size.charAt(0).toUpperCase()}${size.slice(1)}`

const useMatchBreakpoints = (): MatchBreakpoints => {
  const [state, setState] = useState<MatchBreakpoints>(() => {
    return Object.keys(mediaQueries).reduce((result, size) => {
      const key = getKey(size)
      const mql = window.matchMedia(mediaQueries[size as keyof MediaQueries])
      return { ...result, [key]: mql.matches }
    }, {}) as MatchBreakpoints
  })

  useEffect(() => {
    const mqls = Object.keys(mediaQueries).map(size => ({
      mql: window.matchMedia(mediaQueries[size as keyof MediaQueries]),
      handler: (e: MediaQueryListEvent) => {
        setState(prev => ({
          ...prev,
          [`is${capitalize(size)}`]: e.matches
        }))
      }
    }))

    mqls.forEach(({ mql, handler }) => mql.addEventListener('change', handler))

    return () => {
      mqls.forEach(({ mql,handler }) => {
        mql.removeEventListener('change', handler)
      })
    }
  }, [])

  return state
}

export default useMatchBreakpoints

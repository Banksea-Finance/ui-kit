import React, { useCallback, useContext, useMemo, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { themes } from '../configs'
import { ComponentStylesOverride, ThemeConfig, ThemeType } from '../types'
import { ModalProvider } from '../widgets'
import { NotifyProvider } from './notify-context'

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type ThemeConfigOverride = RecursivePartial<ThemeConfig>

const THEME_STORAGE_KEY = 'theme'

const ThemeWrapperContext = React.createContext({
  themeType: 'light',
  theme: themes.light,
  switchTheme: () => {
  }
})

const useLocalStorage = <T, >(key: string, defaultState?: T): [T | undefined, (arg?: T) => void] => {
  const [state, setState] = useState<T | undefined>(() => {
    // NOTE: Not sure if this is ok
    const storedState = localStorage.getItem(key)
    if (storedState) {
      return JSON.parse(storedState)
    }

    return defaultState
  })

  const setLocalStorageState = useCallback(
    (newState?: T) => {
      const changed = state !== newState
      if (!changed) {
        return
      }

      setState(newState)
      if (!newState) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newState))
      }
    },
    [state, key]
  )

  return [state, setLocalStorageState]
}

const mergeConfig = (config: ThemeConfig, override?: ThemeConfigOverride) => {
  if (!override) return config

  const _recursiveMerge = (target: any, source: any): any => {
    const keysToOverride = Object.keys(source)

    return keysToOverride.reduce((res, key) => {
      return ({
        ...res,
        [key]: typeof source[key] === 'object' ? _recursiveMerge(target[key], source[key]) : source[key]
      })
    }, target)
  }

  return _recursiveMerge(config, override)
}

const ThemeWrapperProvider: React.FC<{ componentsOverride?: ComponentStylesOverride, configOverride?: ThemeConfigOverride }> = ({
  children,
  componentsOverride,
  configOverride
}) => {
  const [storedThemeType, setStoredTheme] = useLocalStorage<ThemeType>(THEME_STORAGE_KEY, 'dark')

  const [themeType, setThemeType] = useState<ThemeType>(storedThemeType as ThemeType)

  const switchTheme = useCallback(() => {
    if (themeType === 'light') {
      setThemeType('dark')
      setStoredTheme('dark')
    } else {
      setThemeType('light')
      setStoredTheme('light')
    }
  }, [themeType])

  const activeTheme: DefaultTheme = useMemo(() => {
    return mergeConfig({
      ...themes[themeType as ThemeType],
      componentStylesOverride: componentsOverride || {}
    }, configOverride)
  }, [themeType])

  return (
    <ThemeWrapperContext.Provider
      value={{
        themeType,
        theme: activeTheme,
        switchTheme
      }}
    >
      <ThemeProvider theme={activeTheme}>
        <NotifyProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </NotifyProvider>
      </ThemeProvider>
    </ThemeWrapperContext.Provider>
  )
}

const useThemeWrapper = () => {
  const { themeType, theme, switchTheme } = useContext(ThemeWrapperContext)

  return {
    themeType,
    themeInstance: theme,
    switchTheme
  }
}

export { ThemeWrapperProvider, useThemeWrapper }

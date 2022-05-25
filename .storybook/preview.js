import React from 'react'
import { GlobalStyles, ThemeWrapperProvider } from '../src'

import './fonts.css'

const globalDecorator = (StoryFn) => {
  return (
    <ThemeWrapperProvider
      configOverride={{
        fontFamilies: {
          common: 'Rajdhani',
          important: 'G8321'
        }
      }}
    >
      <GlobalStyles/>
      <StoryFn/>
    </ThemeWrapperProvider>
  )
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
}

export const decorators = [globalDecorator]

import React from 'react'
import { ThemeWrapperProvider, GlobalStyles } from '../src'

import './fonts.css'

const globalDecorator = (StoryFn) => {
  return (
    <ThemeWrapperProvider
      configOverride={{
        fonts: {
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

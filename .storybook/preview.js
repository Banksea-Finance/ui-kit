import React from 'react'
import { GlobalStyles, ModalProvider, NotifyProvider, ThemeWrapperProvider } from '../src'

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
      <NotifyProvider>
        <ModalProvider>
          <StoryFn/>
        </ModalProvider>
      </NotifyProvider>
    </ThemeWrapperProvider>
  )
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
}

export const decorators = [globalDecorator]

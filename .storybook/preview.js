import React from 'react'
import { GlobalStyles, ModalProvider, NotifyProvider, ThemeWrapperProvider } from '../src'

import './fonts.css'

const globalDecorator = (StoryFn) => {
  return (
    <ThemeWrapperProvider
      configOverride={{
        shadows: {
          active: '0px 0px 4px 4px #7864e642'
        },
        colors: {
          primary: '#7864e6',
          primaryContrary: '#D25AE6',
          secondary: '#5A82D2',
          background: '#050F1E',
          backgroundDisabled: '#1e1e32',
          backgroundSecondary: '#0A143C',
          success: '#329664',
          danger: '#DC6E78',
          text: '#fff',
          disabled: '#999999',
          gradient: 'linear-gradient(90deg, #7864E6 0%, #D25AE6 55%)'
        },
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

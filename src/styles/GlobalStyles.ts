import { createGlobalStyle } from 'styled-components'
import { NotificationStyleMixin } from '../components/Notification'
import { SelectStyleMixin } from '../components/Select'
import { ResetDefaultStyles } from './ResetDefaultStyles'
import { ScrollBarStyles } from './ScrollBar'

export const GlobalStyles = createGlobalStyle`
  ${ResetDefaultStyles}
  ${NotificationStyleMixin}
  ${SelectStyleMixin}
  ${ScrollBarStyles}

  body {
    background: ${({ theme }) => theme.colors.background};
  }
`

import { scales } from '../../types'
import { ButtonVariants, buttonVariants } from './types'

export const scaleVariants = {
  [scales.S]: {
    height: '32px',
    fontSize: '14px',
    padding: '0 14px'
  },
  [scales.M]: {
    height: '40px',
    padding: '0 14px',
    fontSize: '16px'
  },
  [scales.L]: {
    height: '50px',
    padding: '0 18px',
    fontSize: '18px'
  }
}

export const styleVariants: Record<ButtonVariants, any> = {
  [buttonVariants.primary]: {
    color: 'textContrary'
  },
  [buttonVariants.primaryContrary]: {
    color: 'textContrary',
  },
  [buttonVariants.secondary]: {
    borderColor: 'primary',
    color: 'textContrary',
    ':disabled': {
      backgroundColor: 'transparent',
    },
  },
  [buttonVariants.tertiary]: {
    boxShadow: 'none',
    color: 'white',
    border: '1px #cdcdcd solid',
  },
  [buttonVariants.subtle]: {
    color: 'white',
    boxShadow: 'none',
  },
  [buttonVariants.danger]: {
    color: 'white',
  },
  [buttonVariants.success]: {
    color: 'white',
  },
  [buttonVariants.disabled]: {
    color: 'white',
  },
  [buttonVariants.warning]: {
    color: 'white',
  },
  [buttonVariants.text]: {
    backgroundColor: 'transparent',
    color: 'primary',
    boxShadow: 'none',
  },
  [buttonVariants.outlined]: {
    color: 'primary',
    fontWeight: 'bold'
  }
}

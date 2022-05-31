import styled, { createGlobalStyle, keyframes } from 'styled-components'
import ReactModal from 'react-modal'

export const ModalGlobalStyle = createGlobalStyle`
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.18s ease-in-out;

    background-color: rgba(3, 2, 29, 0.7) !important;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
    // backdropFilter: 'blur(1px)',
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }
`

export const responsiveDefaultContentStyle = (isDesktop: boolean) => {
  if (isDesktop) {
    return {
      width: '90%',
      margin: '0 auto',
      background: 'none',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontFamily: 'MontserratAlternates'
    }
  }

  return {
    width: '90%',
    margin: '0',
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontFamily: 'MontserratAlternates'
  }
}

const ZoomIn = keyframes`
  from {
    transform: scale(0%);
  }
  
  to {
    transform: scale(100%);
  }
`

const ZoomOut = keyframes`
  from {
    transform: scale(100%);
  }
  
  to {
    transform: scale(0%);
  }
`

export const ZoomContainer = styled.div`
  &.in {
    animation: ${ZoomIn} 0.2s ease-out;
  }
  
  &.out {
    animation: ${ZoomOut} 0.2s ease-out;
  }
`

export const StyledReactModal = styled(ReactModal)`
  :focus-visible {
    outline: none;
  }
`

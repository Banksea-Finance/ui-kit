import React, { Fragment, useCallback, useContext, useState } from 'react'
import { ModalConfig, ModalContextValue, ModalEvents } from './types'
import { useResponsive } from '../../hooks'
import { ModalGlobalStyle, responsiveDefaultContentStyle, StyledReactModal, ZoomContainer } from './styles'

const ModalContext = React.createContext<ModalContextValue>({
  open: (_: ModalConfig['content']) => {},
  configModal: (_: ModalConfig) => {},
  close: () => {},
  update: () => {},
  addEventListener: (_event: ModalEvents, _callback: () => void) => 0,
  removeEventListener: (_event: ModalEvents, _callbackId: number) => {}
})

const ModalWrapper: React.FC<{ contentStyle?: React.CSSProperties; isOpen: boolean; contentWrapper?: React.FC }> = ({
  contentStyle,
  contentWrapper: ContentWrapper,
  isOpen,
  children
}) => {
  const { isDesktop } = useResponsive()

  return (
    <StyledReactModal
      preventScroll={true}
      isOpen={isOpen}
      className={'modal-wrapper'}
      appElement={document.getElementById('root')!}
      closeTimeoutMS={200}
      style={{
        content: { ...responsiveDefaultContentStyle(isDesktop), ...contentStyle }
      }}
    >
      {
        ContentWrapper ? (
          <ContentWrapper>
            {children}
          </ContentWrapper>
        ) : (
          <Fragment>
            {children}
          </Fragment>
        )
      }
    </StyledReactModal>
  )
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const ModalProvider: React.FC = ({ children }) => {
  const [onClosing, setOnClosing] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<React.ReactNode>()

  const [callbackByEvent, setCallbackByEvent] = useState<Map<ModalEvents, { id: number; callback: () => void }[]>>(
    new Map()
  )

  const [config, setConfig] = useState<ModalConfig>({
    closeable: true
  })

  const close = useCallback(async () => {
    setOnClosing(true)
    await sleep(100)
    setContent(undefined)
    setIsOpen(false)

    const callbacks = callbackByEvent.get('close')

    callbacks?.forEach(({ callback }) => {
      callback()
    })
  }, [callbackByEvent])

  // TODO: It should be appended rather than replaced when there is already a modal and open a new modal
  const open = useCallback(async (content: ModalConfig['content'], closeable?: boolean) => {
    if (!isOpen) {
      await close()
    }

    setIsOpen(true)
    setOnClosing(false)

    if (closeable === undefined) {
      setConfig(prev => ({ ...prev, closeable: true }))
    } else {
      setConfig(prev => ({ ...prev, closeable }))
    }

    content && setContent(content)

    const callbacks = callbackByEvent.get('open')

    callbacks?.forEach(({ callback }) => {
      callback()
    })
  }, [callbackByEvent, close])

  const update = useCallback(async (modalContent?: JSX.Element) => {
    setOnClosing(true)
    await sleep(100)
    setContent(modalContent)
    setOnClosing(false)

    const callbacks = callbackByEvent.get('update')
    callbacks?.forEach(({ callback }) => {
      callback()
    })
  }, [callbackByEvent])

  const configModal = (config: ModalConfig) => {
    setConfig(prev => ({
      ...prev,
      ...config
    }))
  }

  const addEventListener = useCallback(
    (event: ModalEvents, callback: () => void) => {
      const random = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
      const entry: { id: number; callback: () => void } = { id: -1, callback }

      const exist = (idToCheck: number) => {
        return callbackByEvent.get(event)?.some(({ id }) => id === idToCheck)
      }

      do {
        entry.id = random()
      } while (exist(entry.id))

      setCallbackByEvent(prev => {
        const arr = prev.get(event) || []

        return prev?.set(event, [...arr, entry])
      })

      return entry.id
    },
    [callbackByEvent]
  )

  const removeEventListener = useCallback((event: ModalEvents, callbackId: number) => {
    setCallbackByEvent(prev => {
      const callbacks = prev.get(event)

      const index = () => {
        if (!callbacks) return -1

        for (let i = 0; i < callbacks.length || 0; i++) {
          const cb = callbacks[i]
          if (cb.id === callbackId) {
            return i
          }
        }

        return -1
      }

      callbacks?.splice(index(), 1)

      return prev?.set(event, callbacks || [])
    })

    return
  }, [callbackByEvent])

  return (
    <ModalContext.Provider value={{ open, update, close, configModal, addEventListener, removeEventListener }}>
      <ModalGlobalStyle />
      <ModalWrapper isOpen={isOpen} contentStyle={config.contentStyle} contentWrapper={config.contentWrapper}>
        <ZoomContainer className={onClosing ? 'out' : 'in'}>
          {content}
        </ZoomContainer>
      </ModalWrapper>
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => {
  const { open, update, close, configModal, addEventListener, removeEventListener } = useContext(ModalContext)

  return {
    openModal: open,
    updateModal: update,
    closeModal: close,
    configModal,
    addEventListener,
    removeEventListener
  }
}

export { ModalContext, ModalProvider, useModal }

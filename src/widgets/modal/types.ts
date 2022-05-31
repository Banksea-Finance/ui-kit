import React from 'react'

export type ModalContextValue = {
  open: (content: ModalConfig['content'], closeable?: boolean) => void
  configModal: (config: ModalConfig) => void
  update: (modalContent?: JSX.Element) => void
  close: () => void
  addEventListener: (event: ModalEvents, callback: () => void) => number
  removeEventListener: (event: ModalEvents, callbackId: number) => void
}

export type ModalConfig = {
  content?: React.ReactNode
  closeable?: boolean
  contentStyle?: React.CSSProperties
  contentWrapper?: React.FC
}

export type ModalEvents = 'open' | 'close' | 'update'

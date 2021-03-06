import React, { ReactNode, useCallback, useEffect, useMemo } from 'react'
import { Button, ButtonProps } from '../Button'
import { Card, CardProps } from '../Card'
import { Text, TextProps } from '../Text'
import { useResponsive } from '../../hooks'
import { Box, Flex } from '../Box'
import { FlexboxProps, HeightProps } from 'styled-system'
import { CloseSvg } from '../../assets/svgs'
import { useModal } from '../../widgets'

export type DialogProps = Omit<CardProps & {
  title: ReactNode
  titlePrefix?: ReactNode
  cancelButtonProps?: ButtonProps
  confirmButtonProps?: ButtonProps
  onConfirm?: VoidFunction
  onCancel?: VoidFunction
  bottomMessage?: string | TextProps
  closeable?: boolean
  onClose?: VoidFunction
}, keyof FlexboxProps | keyof HeightProps>

const DialogContainer: React.FC<DialogProps> = ({ minWidth, width, variant, ...rest }) => {
  const { isMobile } = useResponsive()

  return (
    <Card
      flexDirection={'column'}
      p={'24px 24px 0 24px'}
      minWidth={minWidth || (!isMobile ? '448px' : undefined)}
      maxWidth={'min(1080px, 90vw)'}
      width={isMobile ? '95vw' : width}
      variant={variant}
      {...rest}
    />
  )
}

const DialogHeader: React.FC<DialogProps> = ({ titlePrefix, title, variant, closeable, onClose }) => {
  const { closeModal } = useModal()

  const handleClose = useCallback(() => {
    if (onClose) onClose()

    closeModal()
  }, [onClose, closeModal])

  return (
    <Flex
      jc={'space-between'}
      ai={'center'}
      pb={'8px'}
      borderBottom={'1px solid #909090'}
    >
      <Flex ai={'center'} mr={'16px'}>
        {titlePrefix}
        <Text fontSize={'20px'} important fontWeight={700} color={variant}>
          {title}
        </Text>
      </Flex>

      {
        closeable && (
          <Box style={{ cursor: 'pointer' }} onClick={handleClose}>
            <CloseSvg />
          </Box>
        )
      }
    </Flex>
  )
}

const DialogFooter: React.FC<DialogProps> = ({ onCancel, onConfirm, cancelButtonProps, confirmButtonProps }) => {
  return (
    <Flex
      jc={'center'}
      ai={'center'}
      mb={'16px'}
    >
      {
        onCancel && (
          <Button style={{ flex: 8 }} {...cancelButtonProps} onClick={onCancel} variant={'danger'} minWidth={'fit-content'}>
            {cancelButtonProps?.children || 'Cancel'}
          </Button>
        )
      }
      {
        (onCancel && onConfirm) ? <div style={{ flex: 1 }} /> : undefined
      }
      {
        onConfirm && (
          <Button style={{ flex: 8 }} {...confirmButtonProps} onClick={onConfirm} minWidth={'fit-content'}>
            {confirmButtonProps?.children || 'Confirm'}
          </Button>
        )
      }
    </Flex>
  )
}

const DialogBottomMessage: React.FC<DialogProps> = ({ bottomMessage }) => {
  const hasBottomMessage = useMemo(() => {
    if (typeof bottomMessage === 'string') {
      return bottomMessage?.length
    }

    return bottomMessage?.children
  }, [bottomMessage])

  return (
    hasBottomMessage ? (
      typeof bottomMessage === 'string' ? (
        <Text mt={'-8px'} mb={'8px'} bold textAlign={'center'}>
          {bottomMessage}
        </Text>
      ) : (
        <Text mt={'-8px'} mb={'8px'} bold textAlign={'center'} {...bottomMessage}>
          {bottomMessage?.children}
        </Text>
      )
    ) : <></>
  )
}

const useDialogKeyboardListener = ({ onClose, closeable, onConfirm, confirmButtonProps }: DialogProps) => {
  return useEffect(() => {
    const cb = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeable) onClose?.()

      if (
        onConfirm
        && (e.key === 'Enter')
        && !confirmButtonProps?.disabled
        && !confirmButtonProps?.isLoading
      ) {
        onConfirm()
      }
    }

    window.addEventListener('keyup', cb)

    return () => {
      window.removeEventListener('keyup', cb)
    }
  }, [closeable, onConfirm, confirmButtonProps])
}

export const Dialog: React.FC<DialogProps> = ({ children, closeable = true, ...props }) => {
  useDialogKeyboardListener(props)

  return (
    <DialogContainer {...props}>
      <DialogHeader {...props} closeable={closeable} />
      <Box margin={'32px 0'}>
        { children }
      </Box>
      <DialogFooter {...props} />
      <DialogBottomMessage {...props} />
    </DialogContainer>
  )
}

import React from 'react'
import { Box, Button, Dialog } from '../../components'
import { useModal } from '../../widgets'

export default {
  title: 'widgets/Modal',
  argTypes: {},
}

export const UseModal = () => {
  const { openModal } = useModal()

  return (
    <Box>
      <Button
        onClick={() => openModal(
          <Dialog title={'This a dialog'}>
            <Button onClick={() => openModal(<Dialog title={'This a nested dialog'} />)}>
              Open a Nested Modal
            </Button>
          </Dialog>
        )}
      >
        Open a Modal
      </Button>
    </Box>
  )
}

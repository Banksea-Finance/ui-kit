import React from 'react'
import { Box, Button, Dialog } from '../../components'
import { useModal } from '../../widgets'
import { useNotify } from '../../contexts'

export default {
  title: 'widgets/Modal',
  argTypes: {},
}

export const UseModal = () => {
  const { openModal } = useModal()
  const { notify } = useNotify()

  return (
    <Box>
      <Button
        onClick={() => openModal(
          <Dialog title={'This a dialog'}>
            <Button
              onClick={() => openModal(
                <Dialog title={'This a nested dialog'}>
                  <Button
                    onClick={() => notify({
                      title: 'Here is title',
                      description: 'Here is description',
                    })}
                  >
                    Notify
                  </Button>
                </Dialog>
              )}
            >
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

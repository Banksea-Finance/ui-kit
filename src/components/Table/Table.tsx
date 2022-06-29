import React from 'react'
import { StyledTable } from './StyledTable'
import { TableProps } from './types'
import { Box } from '../Box'

export const Table = <RecordType,>(props: TableProps<RecordType>) => {
  const columns = React.useMemo(() => {
    return props.columns?.map(column => {
      if ('minWidth' in column) {
        const { minWidth, render } = column

        return {
          ...column,
          render: (value: any, record: RecordType, index: number) => {
            return (
              <Box minWidth={minWidth}>
                {
                  render
                    ? render(value, record, index)
                    : (
                      <span>{React.isValidElement(value) ? value : undefined}</span>
                    )
                }
              </Box>
            )
          }
        }
      }

      return column
    })
  }, [props.columns])

  return (
    // @ts-ignore
    <StyledTable
      {...props}
      // @ts-ignore
      columns={columns}
    />
  )
}

import React from 'react'
import { StyledTable } from './StyledTable'
import { TableProps } from './types'
import { Box } from '../Box'
import { Skeleton } from '../Skeleton'
import _ from 'lodash'

export const Table = <RecordType,>(props: TableProps<RecordType>) => {
  const { data, columns, loading, pageSize, ...restProps } = props

  const _columns = React.useMemo(() => {
    return columns?.map(column => {
      const clone = { ...column }

      if ('minWidth' in clone) {
        const { minWidth, render } = clone

        clone.render = (value: any, record: RecordType, index: number) => {
          return (
            <Box minWidth={minWidth}>
              {
                render
                  ? render(value, record, index)
                  : (
                    <span>{value}</span>
                  )
              }
            </Box>
          )
        }
      }

      if (loading && !('children' in clone)) {
        const defaultLoadingRender = () => (<Skeleton width={'80%'} />)

        clone.render = clone.loadingRender || defaultLoadingRender
      }

      return clone
    })
  }, [columns, loading])

  const _data = React.useMemo(() => {
    if (loading) return _.range(0, pageSize || 10).map(() => ({}))

    return data
  }, [data, loading, pageSize])

  return (
    // @ts-ignore
    <StyledTable
      {...restProps}
      data={_data}
      columns={_columns as any}
    />
  )
}

import React, { useState } from 'react'

import { Grid, Pagination, Text } from '../../index'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
  },
}

export const Default = () => {
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const onShowSizeChange = (current: number, pageSize?: number) => {
    setCurrent(current)
    pageSize && setPageSize(pageSize)
  }

  const onChange = (current: number, pageSize?: number) => {
    setCurrent(current)
    pageSize && setPageSize(pageSize)
  }

  return (
    <Grid p={'32px'} gridTemplateColumns={'repeat(1, max-content)'} gridGap={'32px'}>
      <Text>Current: {current}, Page size: {pageSize}</Text>

      <Pagination
        pageSizeOptions={[5, 10, 15, 20]}
        showSizeChanger
        showQuickJumper
        defaultPageSize={20}
        defaultCurrent={5}
        current={current}
        pageSize={pageSize}
        onShowSizeChange={onShowSizeChange}
        onChange={onChange}
        total={450}
      />

      <Pagination
        pageSizeOptions={[5, 10, 15, 20]}
        showSizeChanger
        defaultPageSize={20}
        defaultCurrent={5}
        current={current}
        pageSize={pageSize}
        onShowSizeChange={onShowSizeChange}
        onChange={onChange}
        total={450}
      />

      <Pagination
        pageSizeOptions={[5, 10, 15, 20]}
        showQuickJumper
        defaultPageSize={20}
        defaultCurrent={5}
        current={current}
        pageSize={pageSize}
        onShowSizeChange={onShowSizeChange}
        onChange={onChange}
        total={450}
      />

      <Pagination
        pageSizeOptions={[5, 10, 15, 20]}
        showLessItems
        defaultPageSize={20}
        defaultCurrent={5}
        current={current}
        pageSize={pageSize}
        onShowSizeChange={onShowSizeChange}
        onChange={onChange}
        total={450}
      />
    </Grid>
  )
}

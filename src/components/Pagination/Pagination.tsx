import React from 'react'
import RcPagination, { PaginationProps } from 'rc-pagination'
import { PaginationWrapper } from './styles'
import 'rc-pagination/assets/index.css'
import { Select } from '../Select'
import { clone } from 'lodash'

export const Pagination: React.FC<PaginationProps> = ({ locale, showSizeChanger = false, ...props }) => {
  const SelectForPagination = clone(Select)

  SelectForPagination.defaultProps = {
    scale: 'S',
    width: '120px'
  }

  return (
    <PaginationWrapper>
      {/* @ts-ignore */}
      <RcPagination
        {...props}
        showSizeChanger={showSizeChanger}
        locale={locale || { jump_to: 'Jump to', jump_to_confirm: 'Go', items_per_page: 'per page' }}
        selectComponentClass={SelectForPagination}
        prevIcon={
          <svg width="10" height="10" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 1L1.25 8.5L8.75 16" stroke="#7864E6" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        nextIcon={
          <svg width="10" height="10" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 1L8.75 8.5L1.25 16" stroke="#7864E6" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
      />
    </PaginationWrapper>
  )
}

import styled from 'styled-components'
import Table from 'rc-table'
import { getOverridableStyle } from '../../utils'
import { StyledTableProps } from './types'

const getRowBackgrounds = <T,>({ rowStyle }: StyledTableProps<T>) => {
  const { background = ['rgb(20,30,81)', 'rgb(30,40,101)'] } = rowStyle || {}

  return background.map((bg, index) => {
    const length = background.length

    return `
      &:nth-of-type(${length}n + ${(index + 1) % length}) {
        background: ${bg};
      }
    `
  })
}

export const StyledTable = styled(Table)<StyledTableProps<any>>`
  font-family: ${({ theme }) => theme.fontFamilies.common};

  .rc-table-container, .rc-table-content {
    overflow-x: auto;
  }

  table {
    width: 100%;
  }

  .rc-table-cell {
    color: ${({ theme }) => theme.colors.text};
    vertical-align: middle;
  }

  thead.rc-table-thead {
    background: ${getOverridableStyle('Table', 'headBackground', ({ theme }) => theme.colors.backgroundSecondary)};
    background: ${(({ headStyle }) => headStyle?.background)};

    height: ${getOverridableStyle('Table', 'headHeight', '48px')};
    height: ${({ headStyle }) => headStyle?.height};

    .rc-table-cell {
      color: ${({ headStyle }) => headStyle?.color};
    }
  }

  .rc-table-row {
    height: ${getOverridableStyle('Table', 'rowHeight', '36px')};
    height: ${props => props.rowStyle?.height};
    transition: all 0.38s;
    ${getRowBackgrounds};

    .rc-table-cell {
      color: ${({ rowStyle }) => rowStyle?.color};

      padding: 4px;
      white-space: nowrap;
    }

    &:hover {
      background: ${getOverridableStyle('Table', 'rowHoverBackground', 'linear-gradient(0deg, #7864E6, #0000, #7864E6)')};
      background: ${({ rowStyle }) => rowStyle?.hoverBackground};
    }
  }
`

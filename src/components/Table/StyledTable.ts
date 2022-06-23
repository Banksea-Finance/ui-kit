import styled from 'styled-components'
import Table from 'rc-table'
import { getOverridableStyle } from '../../utils'
import { StyledTableProps } from './types'

export const StyledTable = styled(Table)<StyledTableProps>`
  font-family: ${({ theme }) => theme.fontFamilies.common};

  thead.rc-table-thead {
    background: ${getOverridableStyle('Table', 'headBackground', ({ theme }) => theme.colors.backgroundSecondary)};
    background: ${(({ headStyle }) => headStyle?.background)};

    height: ${getOverridableStyle('Table', 'headHeight', '48px')};
    height: ${({ headStyle }) => headStyle?.height};
  }

  .rc-table-cell {
    color: ${({ theme }) => theme.colors.text};
    vertical-align: middle;
  }

  .rc-table-row {
    height: ${getOverridableStyle('Table', 'rowHeight', '36px')};
    height: ${props => props.rowStyle?.height};

    ${({ rowStyle }) => rowStyle?.background?.map((bg, index) => {
    const length = rowStyle.background!.length
          
    return `
      &:nth-of-type(${length}n + ${(index + 1) % length}) {
        background: ${bg};
      }
    `})}

    transition: all 0.38s;

    &:hover {
      background: ${getOverridableStyle('Table', 'rowHoverBackground', 'linear-gradient(0deg, #7864E6, #0000, #7864E6)')};
      background: ${({ rowStyle }) => rowStyle?.hoverBackground};
    }
  }
`

StyledTable.defaultProps = {
  rowStyle: {
    background: ['rgb(20,30,81)', 'rgb(30,40,101)'],
  }
}

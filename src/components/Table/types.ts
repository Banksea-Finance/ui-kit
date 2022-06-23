import { TableProps as RcTableProps } from 'rc-table/lib/Table'
import { ColumnsType } from 'rc-table/lib/interface'
import { CSSProperties, DefaultTheme } from 'styled-components'

type TableRowBackground = Array<CSSProperties['background']>

type TableOverridableCSSProperties = {
  headBackground: CSSProperties['background']
  headHeight: CSSProperties['height']
  rowBackground: TableRowBackground
  rowHeight: CSSProperties['height']
  rowHoverBackground: CSSProperties['background']
}

interface TableProps extends RcTableProps {
  headStyle?: Partial<Pick<CSSProperties, 'height' | 'background' | 'color'>>

  rowStyle?: {
    height?: CSSProperties['height']
    background?: TableRowBackground,
    color?: CSSProperties['color'],
    hoverBackground?: CSSProperties['background']
  }
}

interface StyledTableProps extends TableProps {
  theme: DefaultTheme
}

export type {
  StyledTableProps,
  ColumnsType,
  TableProps,
  TableOverridableCSSProperties
}

import { TableProps as RcTableProps } from 'rc-table/lib/Table'
import { ColumnGroupType, ColumnType } from 'rc-table/lib/interface'
import { CSSProperties, DefaultTheme } from 'styled-components'
import { LayoutProps, SpaceProps } from 'styled-system'

type TableRowBackground = Array<CSSProperties['background']>

type TableOverridableCSSProperties = {
  headBackground: CSSProperties['background']
  headHeight: CSSProperties['height']
  rowBackground: TableRowBackground
  rowHeight: CSSProperties['height']
  rowHoverBackground: CSSProperties['background']
}

interface StyledTableProps<RecordType> extends TableProps<RecordType> {
  theme: DefaultTheme
}

interface AdvancedColumnType<RecordType> extends ColumnType<RecordType> {
  minWidth?: string

  loadingRender?: this['render']
}

interface AdvancedColumnGroupType<RecordType> extends ColumnGroupType<RecordType> {
  children: ColumnsType<RecordType>;
}

type ColumnsType<RecordType = unknown> = readonly (AdvancedColumnGroupType<RecordType> | AdvancedColumnType<RecordType>)[];

interface TableProps<RecordType> extends RcTableProps<RecordType>, LayoutProps, SpaceProps {
  headStyle?: Partial<Pick<CSSProperties, 'height' | 'background' | 'color'>>

  rowStyle?: {
    height?: CSSProperties['height']
    background?: TableRowBackground,
    color?: CSSProperties['color'],
    hoverBackground?: CSSProperties['background']
  }

  columns?: ColumnsType<RecordType>;

  pageSize?: number
  loading?: boolean
}

export type {
  StyledTableProps,
  ColumnsType,
  TableProps,
  TableOverridableCSSProperties
}

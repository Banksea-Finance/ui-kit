import { BreakpointKeys } from './breakpoints'

export type MediaQueries =
  { [Key in BreakpointKeys as `min${Capitalize<Key>}`]: string }
  & { [Key in BreakpointKeys as `max${Capitalize<Key>}`]: string }

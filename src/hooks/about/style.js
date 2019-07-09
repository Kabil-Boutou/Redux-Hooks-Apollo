import { css } from 'emotion'

const color = 'darkgreen'

export const background = css`
  background-color: hotpink;
  &:hover {
    color: ${color};
  }
`

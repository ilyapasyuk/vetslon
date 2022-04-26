import styled, { css } from 'styled-components'

interface IStyledSearch {
  isOpen: boolean
}

const StyledSearch = styled.div<IStyledSearch>`
  ${({ isOpen }) =>
    isOpen &&
    css`
      &:before {
        background: black;
        content: '';
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      }
    `}
`

export { StyledSearch }

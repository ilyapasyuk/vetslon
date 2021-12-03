import styled, { css } from 'styled-components'

import bgMainMenu from '../../public/header_shape.png'

const StyledHeader = styled.div`
  background: white;
  z-index: 2;
  position: sticky;
  top: 0;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -13px;
    width: 100%;
    height: 58px;
    z-index: 1;
    background-repeat: repeat;
    background-position: center;
    background-image: url(${bgMainMenu.src});
  }
`

export { StyledHeader }

import { MEDIA_QUERY } from 'Constants/mediaQueries'
import styled from 'styled-components'

import bgMainMenu from '../../public/header_shape.png'

const StyledHeader = styled.div`
  background: white;
  z-index: 2;
  position: sticky;
  top: 0;
  box-shadow: 0 10px 15px rgb(25 25 25 / 10%);

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
const StyledHeaderInner = styled.div`
  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    display: flex;
  }
`

const StyledHeaderLogo = styled.div`
  display: none;

  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    display: flex;
    align-items: center;
    margin-right: 20px;
    height: 96px;
  }
`

export { StyledHeader, StyledHeaderLogo, StyledHeaderInner }

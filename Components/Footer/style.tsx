import styled from 'styled-components'

import footerBg1 from '../../public/footer_bg1.jpeg'
import footerBg2 from '../../public/footer_bg2.png'
import footerCopyrightShape from '../../public/footer_copyright_shape.png'

const StyledFooter = styled.footer`
  background-image: url(${footerBg1.src});
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 105px 0 55px;
  z-index: 1;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 24px;
    background-repeat: repeat;
    background-position: center;
    z-index: 1;
    background-image: url(${footerBg2.src});
  }

  &:after {
    background-image: url(${footerCopyrightShape.src});
    top: auto;
    bottom: 0;
  }
`

const StyledFooterMenu = styled.div`
  a {
    display: inline-block;
    font-size: 16px;
    color: #676666;
    text-decoration: none;
    line-height: 2;

    &:hover {
      color: ${props => props.theme.primaryColor};
      padding-left: 5px;
    }
  }
`

export { StyledFooter, StyledFooterMenu }

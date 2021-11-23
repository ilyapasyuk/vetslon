import styled, { createGlobalStyle } from 'styled-components'
import { VET_SLON } from 'theme'

import bgImage from '../../public/bg.jpeg'

const StyleLayout = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
`

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  background-image: url(${bgImage.src});
}

a, .button {
  transition: all 0.3s ease-out 0s;
}

p {
  margin-top: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #676666;
  margin-bottom: 15px;
}

.MuiContainer-root {
  position: relative;
  z-index: 1;
}

blockquote {
  margin: 31px 0 28px;
  font-size: 20px;
  font-weight: 600;
  color: #0a303a;
  font-style: italic;
  line-height: 1.6;
  padding: 40px 40px 40px 70px;
  position: relative;
  background: #f4f1ea;
  border: 0.25px solid ${VET_SLON.primaryColor};
  border-radius: 6px;
  
  &:before {
    content: "";
    position: absolute;
    left: 37px;
    top: 40px;
    bottom: 40px;
    width: 4px;
    background: ${VET_SLON.primaryColor};
    border-radius: 2px;
  }
  
  footer {
    font-size: 14px;
    font-style: normal;
    color: #0a303a;
    font-weight: 500;
    position: relative;
    padding-left: 30px;
    margin-top: 15px;
    
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 17px;
      height: 2px;
      background: #0a303a;
    }
  }
}
`

export { GlobalStyles, StyleLayout }

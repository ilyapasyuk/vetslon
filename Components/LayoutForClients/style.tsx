import styled, { createGlobalStyle } from 'styled-components'

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
`

export { GlobalStyles, StyleLayout }

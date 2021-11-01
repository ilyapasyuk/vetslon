import styled, { createGlobalStyle } from 'styled-components'

const StyleLayout = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
`

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
}`

export { GlobalStyles, StyleLayout }

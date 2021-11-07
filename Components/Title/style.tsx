import styled, { css } from 'styled-components'

const globalTitleStyle = css`
  font-family: 'Nunito', sans-serif;
  color: #0a303a;
  margin-top: 0;
  font-style: normal;
  font-weight: 900;
  text-transform: inherit;
`

const StyledH1 = styled.h1`
  ${globalTitleStyle};
`

const StyledH2 = styled.h2`
  ${globalTitleStyle};
  font-size: 34px;
  margin-bottom: 18px;
`

const StyledH3 = styled.h3`
  ${globalTitleStyle};
  font-size: 34px;
  margin-bottom: 18px;
`

const StyledH4 = styled.h4`
  ${globalTitleStyle};
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 25px;
`

export { StyledH1, StyledH2, StyledH3, StyledH4 }

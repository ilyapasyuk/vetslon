import { MEDIA_QUERY } from 'Constants/mediaQueries'
import styled from 'styled-components'

const StyledContactFormWide = styled.div`
  padding: 50px 25px 50px 25px;
  background-position: center;
  background-size: cover;
  border: 1.5px solid #0a303a;
  border-radius: 15px;
  position: relative;
  background-color: ${props => props.theme.primaryColor};
  text-align: center;

  h1,
  h2,
  h3,
  h4 {
    color: white;
  }

  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    padding: 65px 85px 65px 60px;
  }
`

const StyledContactFormWideFields = styled.div`
  display: grid;
  grid-gap: 20px;

  input,
  textarea {
    border: none;
    background: #fff;
    padding: 21px 30px;
    color: #676666;
    font-size: 14px;
    border-radius: 10px;
    width: 100%;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4;
    display: block;
  }
  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export { StyledContactFormWide, StyledContactFormWideFields }

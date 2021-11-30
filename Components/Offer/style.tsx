import { MEDIA_QUERY } from 'Constants/mediaQueries'
import styled from 'styled-components'

const StyledOffer = styled.div`
  border-radius: 10px;
  box-shadow: 0 9px 20.58px 0.42px rgb(0 0 0 / 5%);
  height: 300px;
  background-repeat: no-repeat;
  background-position: center right;
  background-color: #eaedec;
  background-size: cover;

  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    background-size: contain;
  }

  padding: 20px;
  font-family: 'Nunito', sans-serif;

  h2 {
    font-size: 36px;
    color: ${props => props.theme.primaryColor};
  }

  h5 {
    font-size: 16px;
    @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
      max-width: 50%;
    }
  }
`

export { StyledOffer }

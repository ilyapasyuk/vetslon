import { MEDIA_QUERY } from 'Constants/mediaQueries'
import styled from 'styled-components'

const StyledPromo = styled.div`
  display: grid;
  align-items: center;
  background: #0a303a;
  border-radius: 15px;
  font-family: 'Nunito', sans-serif;
  margin-top: -45px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-bottom: 100px;

  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const StyledPromoItem = styled.div`
  padding: 35px 20px;
  border-bottom: 3px solid #668d50;
  background: ${({ theme }) => theme.primaryColor};
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 26px;
  font-weight: 900;
  color: #fff;

  h5 {
    margin: 0;
  }

  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    display: block;
    text-align: center;
    height: 100%;

    h5 {
      margin-top: 20px;
    }
  }
`

const StyledPromoIcon = styled.div`
  font-size: 40px;
  margin-right: 18px;
  background: rgba(255, 255, 255, 0.15);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;

  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    margin: 0 auto;
  }
`

export { StyledPromo, StyledPromoItem, StyledPromoIcon }

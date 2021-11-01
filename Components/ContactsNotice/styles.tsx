import { MEDIA_QUERY } from 'Constants/mediaQueries'
import styled from 'styled-components'

const StyledContactNotice = styled.div`
  background: #f4f1ea;
  border-radius: 0 0 20px 20px;
  margin: 0 10px;
`

const StyledContactNoticeWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  text-align: center;
  font-size: 13px;
  color: #0a303a;
  line-height: 1.6;
  padding: 15px 0;

  @media (min-width: ${MEDIA_QUERY.SMALL_DEVICES}px) {
    grid-template-columns: 1fr 1fr 1fr;
    text-align: initial;
    padding: 15px;
  }
`

const StyledContactNoticePhone = styled.a`
  color: #0a303a;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom-color: rgba(10, 48, 58, 0.3);
  transition: border-bottom-color 300ms ease;

  &:hover {
    border-bottom-color: transparent;
  }
`

const StyledContactNoticeSocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (min-width: ${MEDIA_QUERY.SMALL_DEVICES}px) {
    justify-content: end;
  }
`

const StyledContactNoticeSocialNetwork = styled.a`
  font-size: 20px;
  color: #0a303a;
  display: flex;
`

export {
  StyledContactNotice,
  StyledContactNoticeWrapper,
  StyledContactNoticePhone,
  StyledContactNoticeSocialNetworks,
  StyledContactNoticeSocialNetwork,
}

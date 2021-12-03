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

  @media (min-width: ${MEDIA_QUERY.SMALL_DEVICES}px) and (max-width: ${MEDIA_QUERY.LARGE_DEVICES}px) {
    padding: 15px;
  }

  @media (min-width: ${MEDIA_QUERY.SMALL_DEVICES}px) {
    grid-template-columns: 2fr 1fr;
    text-align: initial;
  }
`

const StyledContactNoticeLeftArea = styled.div`
  @media (min-width: ${MEDIA_QUERY.SMALL_DEVICES}px) {
    display: flex;
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

  @media (min-width: ${MEDIA_QUERY.SMALL_DEVICES}px) {
    margin-left: 8px;
  }

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

const StyledContactWorkingHours = styled.div`
  @media (min-width: ${MEDIA_QUERY.SMALL_DEVICES}px) {
    margin-right: 30px;
  }
`

export {
  StyledContactNotice,
  StyledContactNoticeWrapper,
  StyledContactNoticePhone,
  StyledContactNoticeSocialNetworks,
  StyledContactNoticeSocialNetwork,
  StyledContactWorkingHours,
  StyledContactNoticeLeftArea,
}

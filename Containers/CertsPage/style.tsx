import { MEDIA_QUERY } from 'Constants/mediaQueries'
import styled from 'styled-components'

const StyledCerts = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledCert = styled.div`
  border-radius: 4px;
  background: #f4f1ea;
  padding: 20px;
  position: relative;

  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  .area {
    &:hover {
      opacity: 1;
      background-color: rgb(255 255 255 / 23%);
    }
  }
`

const StyledShowMoreArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  opacity: 0;
  transition: 0.35s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledOpenedCert = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.45);
  cursor: pointer;

  img {
    max-width: 80vw;
    max-height: 80vh;
    cursor: default;
  }

  @media (min-width: ${MEDIA_QUERY.MEDIUM_DEVICES}px) {
    img {
      max-width: 50vw;
      max-height: 80vh;
    }
  }
`

const StyledOpenedCertClose = styled.button`
  position: absolute;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  top: 0;
  right: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: black;

  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`

export { StyledCerts, StyledCert, StyledShowMoreArea, StyledOpenedCert, StyledOpenedCertClose }

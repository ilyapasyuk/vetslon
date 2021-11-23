import styled from 'styled-components'

const StyledAboutPageWrapper = styled.div`
  padding-top: 110px;
  padding-bottom: 110px;
`

const StyledAboutWhyWeTitle = styled.div`
  color: ${({ theme }) => theme.primaryColor}!important;
  & > * {
    color: ${({ theme }) => theme.primaryColor}!important;
  }
`

const StyledAboutWhyWeDescription = styled.div`
  color: #747474;
  margin-bottom: 0;
  font-weight: 600;
  line-height: 26px;
  font-size: 16px;
`

export { StyledAboutPageWrapper, StyledAboutWhyWeDescription, StyledAboutWhyWeTitle }

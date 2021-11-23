import styled from 'styled-components'

const StyledServicesPageWrapper = styled.div`
  padding-top: 110px;
`

const StyledServicesPage = styled.div`
  .StyledAccordionAccordion {
    margin-bottom: 11px;
    background: #fff;
    border-radius: 6px;
    box-shadow: none !important;
    border: 0 !important;

    &:before {
      display: none;
    }

    .MuiAccordionSummary-content,
    .StyledAccordionDetails {
      padding: 20px 20px 20px 30px;
      margin: 0;
    }
  }

  .StyledAccordionSummary {
    margin: 0;
    padding: 0 20px 0 0;
  }
`

const StyledServicesPageExpandedIcon = styled.div`
  color: #fff;
  border-radius: 47% 53% 61% 39% / 38% 38% 62% 62%;
  background: ${({ theme }) => theme.primaryColor};
  transition: 0.3s linear;
  width: 40px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 37px;
  font-size: 30px;
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
`

const StyledServicesPageList = styled.div`
  display: grid;
  grid-gap: 26px;
`

const StyledServicesPageRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-gap: 20px;
  font-size: 16px;
  align-items: center;
  color: #676666;
  line-height: 28px;
`

export {
  StyledServicesPageWrapper,
  StyledServicesPage,
  StyledServicesPageList,
  StyledServicesPageRow,
  StyledServicesPageExpandedIcon,
}

import styled from 'styled-components'

const StyledPhoneNumber = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin: 0;

    a {
      text-decoration: none;
      font-size: 24px;
      line-height: 1;
      margin-bottom: 4px;
      font-weight: 800;
      font-family: 'Nunito', sans-serif;
      color: #0a303a;
      font-style: normal;
      text-transform: inherit;
      &:hover {
        color: ${props => props.theme.primaryColor};
      }
    }
  }
`

const StyledPhoneNumberIcon = styled.span`
  flex: 0 0 35px;
  background: #f04336;
  color: #fff;
  text-align: center;
  line-height: 35px;
  border-radius: 50%;
  margin-right: 13px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
`

const StyledPhoneNumberSlogan = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: #f04336;
  font-weight: 900;
  font-family: 'Nunito', sans-serif;
`

export { StyledPhoneNumber, StyledPhoneNumberIcon, StyledPhoneNumberSlogan }

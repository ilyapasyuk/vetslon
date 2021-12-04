import styled from 'styled-components'

const StyledContactsWrapper = styled.div`
  padding: 100px 0;
`

const StyledContactsInfo = styled.div`
  background: #f5f2eb;
  border-radius: 12px;
  padding: 38px 55px 45px;
  display: grid;
  grid-gap: 20px;
`

const StyledContactsInfoItem = styled.div`
  display: flex;
  align-items: center;

  .icon {
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background: #fff;
    flex: 0 0 45px;
    border-radius: 50%;
    margin-right: 15px;
    box-shadow: 0px 2px 14.88px 1.12px rgb(97 83 252 / 11%);
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${props => props.theme.primaryColor};
    }
  }

  a {
    color: black;

    &:hover {
      color: ${props => props.theme.primaryColor};
    }
  }
`

export { StyledContactsWrapper, StyledContactsInfo, StyledContactsInfoItem }

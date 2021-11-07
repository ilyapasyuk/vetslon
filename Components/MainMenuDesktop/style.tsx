import styled from 'styled-components'

const StyledMainMenuDesktopList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledMainMenuDesktopItem = styled.li`
  a {
    font-size: 16px;
    font-weight: 800;
    color: #1e4b57;
    padding: 40px 20px;
    display: block;
    line-height: 1;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    position: relative;
    z-index: 1;

    &.StyledMainMenuDesktopItem_active {
      color: white;

      &:before {
        opacity: 1;
      }
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 35px;
      width: 95%;
      clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
      box-shadow: 0 5px 12.09px 0.91px rgb(71 51 127 / 11%);
      transition: all 0.3s ease-out 0s;
      top: 31px;
      margin: 0 auto;
      background: #f04336;
      border-radius: 10px 10px 20px 20px;
      opacity: 0;
      z-index: -1;
    }
  }
`

export { StyledMainMenuDesktopList, StyledMainMenuDesktopItem }

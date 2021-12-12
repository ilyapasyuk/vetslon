import React from 'react'

import { ClientPageType } from 'services/pages'

import { ActiveLink } from 'Components/ActiveLink'
import { Search } from 'Components/Search'

import { StyledMainMenuDesktopItem, StyledMainMenuDesktopList } from './style'

interface MainMenuDesktopProps {
  menu: ClientPageType[]
}

const MainMenuDesktop = ({ menu }: MainMenuDesktopProps) => {
  return (
    <StyledMainMenuDesktopList>
      {menu.map(menuItem => (
        <StyledMainMenuDesktopItem key={menuItem.url}>
          <ActiveLink href={menuItem.url} activeClassName="StyledMainMenuDesktopItem_active">
            {menuItem.title}
          </ActiveLink>
        </StyledMainMenuDesktopItem>
      ))}
    </StyledMainMenuDesktopList>
  )
}

export { MainMenuDesktop }

import { ActiveLink } from 'Components/ActiveLink'
import React from 'react'
import { useRouter } from 'next/router'

import { StyledMainMenuDesktopItem, StyledMainMenuDesktopList } from './style'

import { ClientPageType } from 'services/pages'

interface MainMenuDesktopProps {
  menu: ClientPageType[]
}

const MainMenuDesktop = ({ menu }: MainMenuDesktopProps) => {
  const router = useRouter()

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

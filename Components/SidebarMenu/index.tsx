import React from 'react'

import { ClientPageType } from 'services/pages'

import { StyledMenu, StyledMenuItem, StyledMenuLink } from './style'

interface SidebarMenuProps {
  menu: ClientPageType[]
  onClick: (clickedMenuItem: ClientPageType) => void
}

const SidebarMenu = ({ menu, onClick }: SidebarMenuProps) => {
  return (
    <StyledMenu>
      {menu.map(menuItem => (
        <StyledMenuItem key={menuItem.url}>
          <StyledMenuLink href={menuItem.url}>{menuItem.title}</StyledMenuLink>
          <button onClick={() => onClick(menuItem)}>{`${menuItem.isAvailable}`}</button>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  )
}

export { SidebarMenu }

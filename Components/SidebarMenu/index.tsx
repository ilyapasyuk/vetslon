import React from 'react'
import { Tooltip } from '@mui/material'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { ClientPageType } from 'services/pages'

import { StyledMenu, StyledMenuItem, StyledMenuLink, StyledMenuOnClickButton } from './style'

interface SidebarMenuProps {
  menu: ClientPageType[]
  onClick?: (clickedMenuItem: ClientPageType) => void
  isShowOnClickArea?: boolean
}

const SidebarMenu = ({ menu, onClick, isShowOnClickArea = true }: SidebarMenuProps) => {
  return (
    <StyledMenu>
      {menu.map(menuItem => (
        <StyledMenuItem key={menuItem.url}>
          <StyledMenuLink href={menuItem.url}>{menuItem.title}</StyledMenuLink>
          {isShowOnClickArea && (
            <Tooltip arrow title={menuItem.isAvailable ? 'Скрыть' : 'Показать'} placement="top">
              <StyledMenuOnClickButton
                onClick={() => {
                  if (onClick) {
                    onClick(menuItem)
                  }
                }}
              >
                {menuItem.isAvailable ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </StyledMenuOnClickButton>
            </Tooltip>
          )}
        </StyledMenuItem>
      ))}
    </StyledMenu>
  )
}

export { SidebarMenu }

import { Tooltip } from '@mui/material'
import React from 'react'
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai'

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
          <Tooltip title="Перейти" arrow placement="top">
            <StyledMenuLink href={menuItem.url}>{menuItem.title}</StyledMenuLink>
          </Tooltip>
          {isShowOnClickArea && (
            <Tooltip arrow title={menuItem.isAvailable ? 'Скрыть' : 'Показать'} placement="top">
              <StyledMenuOnClickButton
                onClick={() => {
                  if (onClick) {
                    onClick(menuItem)
                  }
                }}
              >
                {menuItem.isAvailable ? <AiOutlineEyeInvisible /> : <AiFillEye />}
              </StyledMenuOnClickButton>
            </Tooltip>
          )}
        </StyledMenuItem>
      ))}
    </StyledMenu>
  )
}

export { SidebarMenu }

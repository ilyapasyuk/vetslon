import { Container } from '@mui/material'
import React from 'react'

import { ClientPageType } from 'services/pages'

import { StyledHeader } from 'Components/Header/style'
import { MainMenuDesktop } from 'Components/MainMenuDesktop'

interface HeaderProps {
  menu: ClientPageType[]
}

const Header = ({ menu }: HeaderProps) => {
  const filteredMainMenu = menu.filter(menuItem => menuItem.isAvailable)

  return (
    <StyledHeader>
      <Container>
        <MainMenuDesktop menu={filteredMainMenu} />
      </Container>
    </StyledHeader>
  )
}

export { Header }

import { Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import { ClientPageType } from 'services/pages'

import { StyledHeader, StyledHeaderInner, StyledHeaderLogo } from 'Components/Header/style'
import { MainMenuDesktop } from 'Components/MainMenuDesktop'

interface HeaderProps {
  menu: ClientPageType[]
}

const Header = ({ menu }: HeaderProps) => {
  const filteredMainMenu = menu.filter(menuItem => menuItem.isAvailable)

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderInner>
          <StyledHeaderLogo>
            <Image width={80} height={60} src="/logo.png" alt="ВетСлон" />
          </StyledHeaderLogo>
          <MainMenuDesktop menu={filteredMainMenu} />
        </StyledHeaderInner>
      </Container>
    </StyledHeader>
  )
}

export { Header }

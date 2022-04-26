import { Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ClientPageType } from 'services/pages'

import { StyledHeader, StyledHeaderInner, StyledHeaderLogo } from 'Components/Header/style'
import { MainMenuDesktop } from 'Components/MainMenuDesktop'
import { Search } from 'Components/Search'

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
            <Link href="/" passHref>
              <Image width={80} height={60} src="/logo.png" alt="ВетСлон" />
            </Link>
          </StyledHeaderLogo>
          <MainMenuDesktop menu={filteredMainMenu} />
          <Search />
        </StyledHeaderInner>
      </Container>
    </StyledHeader>
  )
}

export { Header }

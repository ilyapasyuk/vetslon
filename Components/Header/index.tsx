import { Container } from '@mui/material'
import React, { useContext, useEffect } from 'react'

import { getAllPages } from 'services/pages'

import { StyledHeader } from 'Components/Header/style'
import { MainMenuDesktop } from 'Components/MainMenuDesktop'

import { ACTION } from 'Contexts/actions'
import { StoreContext } from 'Contexts/store'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const { state, dispatch } = useContext(StoreContext)

  useEffect(() => {
    if (!Boolean(state.mainMenu.length)) {
      getSitePagesFromFirebase()
    }
  }, [state.mainMenu])

  const getSitePagesFromFirebase = async () => {
    const pages = await getAllPages()
    dispatch({ action: ACTION.SET_PAGES, data: pages })
  }

  const filteredMainMenu = state.mainMenu.filter(menuItem => menuItem.isAvailable)

  return (
    <StyledHeader>
      <Container>
        <MainMenuDesktop menu={filteredMainMenu} />
      </Container>
    </StyledHeader>
  )
}

export { Header }

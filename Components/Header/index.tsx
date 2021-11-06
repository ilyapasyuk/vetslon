import React, { useContext, useEffect } from 'react'
import { Container } from '@mui/material'

import { StyledHeader } from 'Components/Header/style'
import { ACTION } from 'Contexts/actions'
import { StoreContext } from 'Contexts/store'

import { MainMenuDesktop } from 'Components/MainMenuDesktop'
import { getAllPages } from 'services/pages'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const { state, dispatch } = useContext(StoreContext)

  console.log('state', state)

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

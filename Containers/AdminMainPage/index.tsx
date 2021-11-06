import React, { useContext, useEffect } from 'react'
import { Container } from '@mui/material'

import { SidebarMenu } from 'Components/SidebarMenu'
import { ACTION } from 'Contexts/actions'

import { StoreContext } from 'Contexts/store'

import { ClientPageType, getAllPages, updatePage } from 'services/pages'

interface AdminMainPageProps {}

const AdminMainPage = ({}: AdminMainPageProps) => {
  const { state, dispatch } = useContext(StoreContext)

  useEffect(() => {
    getSitePagesFromFirebase()
  }, [])

  const getSitePagesFromFirebase = async () => {
    const pages = await getAllPages()
    dispatch({ action: ACTION.SET_PAGES, data: pages })
  }

  const toggleAvailablePage = async (page: ClientPageType) => {
    const updatedPage: ClientPageType = { ...page, isAvailable: !page.isAvailable }

    await updatePage(updatedPage)
    await getSitePagesFromFirebase()
  }

  return (
    <Container>
      <SidebarMenu
        menu={state.mainMenu}
        onClick={clickedMenuItem => toggleAvailablePage(clickedMenuItem)}
      />
    </Container>
  )
}

export { AdminMainPage }

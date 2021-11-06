import { Grid } from '@mui/material'
import React, { useContext, useEffect } from 'react'

import { ClientPageType, getAllPages, updatePage } from 'services/pages'

import { SidebarMenu } from 'Components/SidebarMenu'
import { ACTION } from 'Contexts/actions'
import { StoreContext } from 'Contexts/store'

interface LayoutForAdminProps {
  children: React.ReactNode
}

const LayoutForAdmin = ({ children }: LayoutForAdminProps) => {
  const { state, dispatch } = useContext(StoreContext)

  const preparedMenu: ClientPageType[] = state.mainMenu.map(menuItem => ({
    ...menuItem,
    url: `/admin/${menuItem.url}`,
  }))

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
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <SidebarMenu
          menu={preparedMenu}
          onClick={clickedMenuItem => toggleAvailablePage(clickedMenuItem)}
        />
      </Grid>
      <Grid item xs={8}>
        {children}
      </Grid>
    </Grid>
  )
}

export { LayoutForAdmin }

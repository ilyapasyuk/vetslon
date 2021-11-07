import { Grid, Snackbar } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

import { ClientPageType, getAllPages, updatePage } from 'services/pages'
import { getUser } from 'services/user'

import { SidebarMenu } from 'Components/SidebarMenu'

import { ACTION } from 'Contexts/actions'
import { StoreContext } from 'Contexts/store'

interface LayoutForAdminProps {
  children: React.ReactNode
}

const prefixForAdminPages: string = '/admin/'

const LayoutForAdmin = ({ children }: LayoutForAdminProps) => {
  const { state, dispatch } = useContext(StoreContext)
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false)

  const preparedMenu: ClientPageType[] = state.mainMenu.map(menuItem => ({
    ...menuItem,
    url: `${prefixForAdminPages}${menuItem.url}`,
  }))

  useEffect(() => {
    init()
    getSitePagesFromFirebase()
  }, [])

  const init = async () => {
    const user = await getUser()

    if (user) {
      dispatch({ action: ACTION.SET_USER, data: user })
    }
  }

  const getSitePagesFromFirebase = async () => {
    const pages = await getAllPages()
    dispatch({ action: ACTION.SET_PAGES, data: pages })
  }

  const toggleAvailablePage = async (page: ClientPageType) => {
    const updatedPage: ClientPageType = {
      ...page,
      isAvailable: !page.isAvailable,
      url: page.url.replace(prefixForAdminPages, ''),
    }

    await updatePage(updatedPage)
    await getSitePagesFromFirebase()

    setShowSuccessMessage(true)

    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <SidebarMenu
          menu={preparedMenu}
          onClick={clickedMenuItem => toggleAvailablePage(clickedMenuItem)}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        {children}
      </Grid>
      <Snackbar open={showSuccessMessage} message="Сохранено" />
    </Grid>
  )
}

export { LayoutForAdmin }

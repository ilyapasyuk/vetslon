import React, { useState, useEffect } from 'react'

import { getAllPages, ClientPageType, updatePage } from 'services/pages'

import { SidebarMenu } from 'Components/SidebarMenu'

interface AdminMainPageProps {}

const AdminMainPage = ({}: AdminMainPageProps) => {
  const [pages, setPages] = useState<ClientPageType[]>([])

  useEffect(() => {
    getSitePagesFromFirebase()
  }, [])

  const getSitePagesFromFirebase = async () => {
    const allPages = await getAllPages()
    setPages(allPages)
  }

  const toggleAvailablePage = async (page: ClientPageType) => {
    const updatedPage: ClientPageType = { ...page, isAvailable: !page.isAvailable }

    await updatePage(updatedPage)
    await getSitePagesFromFirebase()
  }

  return (
    <div>
      <SidebarMenu menu={pages} onClick={clickedMenuItem => toggleAvailablePage(clickedMenuItem)} />
    </div>
  )
}

export { AdminMainPage }

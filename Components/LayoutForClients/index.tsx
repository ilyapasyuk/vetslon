import { CONFIG } from 'CONFIG'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'

import { getPhotos } from 'services/instagram'
import { getAllPages } from 'services/pages'
import { getAllServicesCategories } from 'services/services'

import { ContactsNotice } from 'Components/ContactsNotice'
import { Footer } from 'Components/Footer'
import { Header } from 'Components/Header'

import { ACTION } from 'Contexts/actions'
import { StoreContext } from 'Contexts/store'

import { GlobalStyles, StyleLayout } from './style'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

const LayoutForClients = ({ children, title }: LayoutProps) => {
  const { state, dispatch } = useContext(StoreContext)

  console.log('state', state)

  useEffect(() => {
    if (!Boolean(state.mainMenu.length)) {
      getSitePagesFromFirebase()
      getPhotosFromInstagram()
      getServicesFromFirebase()
    }
  }, [state.mainMenu])

  const getSitePagesFromFirebase = async () => {
    const pages = await getAllPages()
    dispatch({ action: ACTION.SET_PAGES, data: pages })
  }

  const getServicesFromFirebase = async () => {
    const servicesCategories = await getAllServicesCategories()
    dispatch({ action: ACTION.SET_SERVICES_CATEGORIES, data: servicesCategories })
  }

  const getPhotosFromInstagram = async () => {
    const photos = await getPhotos('ilyapasyuk')
    console.log('photos', photos)

    if (photos?.length) {
      dispatch({ action: ACTION.SET_INSTAGRAM_PHOTOS, data: photos })
    }
  }

  return (
    <StyleLayout>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <title>{`${title} | ${CONFIG.defaultTitle}`}</title>
      </Head>
      <ContactsNotice
        phoneNumber={CONFIG.phoneNumber}
        appName={CONFIG.appName}
        email={CONFIG.email}
        slogan={CONFIG.slogan}
      />
      <Header menu={state.mainMenu} />
      {children}
      <Footer menu={state.mainMenu} services={state.servicesCategories} />
      <GlobalStyles />
    </StyleLayout>
  )
}

export { LayoutForClients }

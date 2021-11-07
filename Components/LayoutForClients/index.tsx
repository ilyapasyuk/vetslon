import { CONFIG } from 'CONFIG'
import Head from 'next/head'
import React from 'react'

import { ContactsNotice } from 'Components/ContactsNotice'
import { Header } from 'Components/Header'

import { GlobalStyles, StyleLayout } from './style'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

const LayoutForClients = ({ children, title }: LayoutProps) => {
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
      <Header />
      {children}
      <GlobalStyles />
    </StyleLayout>
  )
}

export { LayoutForClients }

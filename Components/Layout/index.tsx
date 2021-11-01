import { CONFIG } from 'CONFIG'
import React from 'react'
import Head from 'next/head'

import { StyleLayout, GlobalStyles } from './style'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

const Layout = ({ children, title }: LayoutProps) => {
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
      {children}
      <GlobalStyles />
    </StyleLayout>
  )
}

export { Layout }

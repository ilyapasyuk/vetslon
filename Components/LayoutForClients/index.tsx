import { CONFIG } from 'CONFIG'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'

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

  useEffect(() => {
    if (!Boolean(state.mainMenu.length)) {
      getSitePagesFromFirebase()
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

  return (
    <StyleLayout>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#6bbb3c" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content={`${CONFIG.appName} | ${CONFIG.defaultTitle}`} />
        <meta name="description" content={CONFIG.slogan} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vetslon.spb.ru/" />
        <meta property="og:title" content={`${CONFIG.appName} | ${CONFIG.defaultTitle}`} />
        <meta property="og:description" content={CONFIG.slogan} />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vetslon.spb.ru/" />
        <meta property="twitter:title" content={`${CONFIG.appName} | ${CONFIG.defaultTitle}`} />
        <meta property="twitter:description" content={CONFIG.slogan} />
        <meta property="twitter:image" content="" />

        <title>{`${title} | ${CONFIG.defaultTitle}`}</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `   window['_fs_debug'] = false;
          window['_fs_host'] = 'fullstory.com';
          window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
          window['_fs_org'] = '172ENF';
          window['_fs_namespace'] = 'FS';
          (function(m,n,e,t,l,o,g,y){
          if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
          g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
          o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
          y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
          g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
          g.anonymize=function(){g.identify(!!0)};
          g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
          g.log = function(a,b){g("log",[a,b])};
          g.consent=function(a){g("consent",!arguments.length||a)};
          g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
          g.clearUserCookie=function(){};
          g.setVars=function(n, p){g('setVars',[n,p]);};
          g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
          if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
          g._v="1.3.0";
        })(window,document,window['_fs_namespace'],'script','user');`,
          }}
        />
        <meta name="yandex-verification" content="d3fbb7876bca2aee" />
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

import React, { Dispatch, ReactNode, createContext, useReducer } from 'react'

import { Photo } from 'services/instagram'
import { ClientPageType } from 'services/pages'
import { ClientServiceCategoriesType, ClientServiceType } from 'services/services'
import { User } from 'services/user'

import { ACTION } from 'Contexts/actions'

export interface Store {
  user: User | undefined
  mainMenu: ClientPageType[]
  servicesCategories: ClientServiceCategoriesType[]
  services: ClientServiceType[]
  instagramPhotos: Photo[]
}

const DEFAULT_STORE: Store = {
  user: undefined,
  mainMenu: [],
  servicesCategories: [],
  services: [],
  instagramPhotos: [],
}

export type DispatchType = {
  action: ACTION
  data?: any
}

const StoreContext = createContext<{
  state: Store
  dispatch: Dispatch<DispatchType>
}>({ state: DEFAULT_STORE, dispatch: () => null })

interface StoreProviderProps {
  children: ReactNode
}

const reducer = (currentStore: Store, payload: DispatchType): Store => {
  switch (payload.action) {
    case ACTION.SET_PAGES:
      return { ...currentStore, mainMenu: payload.data }
    case ACTION.SET_USER:
      return { ...currentStore, user: payload.data }
    case ACTION.SET_SERVICES_CATEGORIES:
      return { ...currentStore, servicesCategories: payload.data }
    case ACTION.SET_INSTAGRAM_PHOTOS:
      return { ...currentStore, instagramPhotos: payload.data }
    case ACTION.SET_SERVICES:
      return { ...currentStore, services: payload.data }
    default:
      return currentStore
  }
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STORE)

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export { StoreProvider, StoreContext }

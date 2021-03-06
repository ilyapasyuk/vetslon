import React, { useContext } from 'react'

import { signInWithGoogle } from 'services/authentication'

import { AdminMainPage } from 'Containers/AdminMainPage'

import { LayoutForClients } from 'Components/LayoutForClients'

import { ACTION } from 'Contexts/actions'
import { StoreContext } from 'Contexts/store'

interface AdminProps {}

const Admin = ({}: AdminProps) => {
  const { state, dispatch } = useContext(StoreContext)

  const { user } = state

  const logIn = async () => {
    const user = await signInWithGoogle()
    dispatch({ action: ACTION.SET_USER, data: user })
  }

  if (user && !user?.isAdmin) {
    return <h2>Sorry, your isn`t admin =/ </h2>
  }

  return (
    <LayoutForClients title="Настройки">
      {user?.isAdmin ? <AdminMainPage /> : <button onClick={logIn}>google</button>}
    </LayoutForClients>
  )
}

export default Admin

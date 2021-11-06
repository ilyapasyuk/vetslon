import { Layout } from 'Components/Layout'
import { AdminMainPage } from 'Containers/AdminMainPage'
import { ACTION } from 'Contexts/actions'
import { StoreContext } from 'Contexts/store'
import React, { useContext, useEffect } from 'react'

import { signInWithGoogle } from 'services/authentication'
import { getUser, User } from 'services/user'

interface AdminProps {}

const Admin = ({}: AdminProps) => {
  const { state, dispatch } = useContext(StoreContext)

  const { user } = state

  const init = async () => {
    const user = await getUser()
    if (user) {
      dispatch({ action: ACTION.SET_USER, data: user })
    }
  }

  useEffect(() => {
    init()
  }, [])

  const logIn = async () => {
    const user = await signInWithGoogle()
    dispatch({ action: ACTION.SET_USER, data: user })
  }

  if (user && !user?.isAdmin) {
    return <h2>Sorry, your isn`t admin =/ </h2>
  }

  return (
    <Layout title="Настройки">
      {user?.isAdmin ? <AdminMainPage /> : <button onClick={logIn}>google</button>}
    </Layout>
  )
}

export default Admin

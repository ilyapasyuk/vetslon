import { Layout } from 'Components/Layout'
import { StyledMenu } from 'Components/SidebarMenu/style'
import { AdminMainPage } from 'Containers/AdminMainPage'
import React, { useEffect, useState } from 'react'

import { signInWithGoogle } from 'services/authentication'
import { getUser, User } from 'services/user'

interface AdminProps {}

const Admin = ({}: AdminProps) => {
  const [user, setUser] = useState<User | null>(null)

  const init = async () => {
    const user = await getUser()
    if (user) {
      setUser(user)
    }
  }

  useEffect(() => {
    init()
  }, [])

  const logIn = async () => {
    const user = await signInWithGoogle()
    setUser(user)
  }

  if (user && !user?.isAdmin) {
    return <h2>Sorry, your isn`t admin =/ </h2>
  }

  return (
    <Layout title="Настройки">
      {user ? <AdminMainPage /> : <button onClick={logIn}>google</button>}
    </Layout>
  )
}

export default Admin

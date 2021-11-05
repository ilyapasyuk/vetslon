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

  return <div>{user ? <h1>logged</h1> : <button onClick={logIn}>google</button>}</div>
}

export default Admin

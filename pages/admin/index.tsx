import { Container } from '@mui/material'
import React, { useContext } from 'react'

import { signInWithGoogle } from 'services/authentication'

import { AdminMainPage } from 'Containers/AdminMainPage'

import { Button } from 'Components/Button'
import { LayoutForClients } from 'Components/LayoutForClients'
import { PageWrapper } from 'Components/PageWrapper'

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
    return <h2>Sorry, your aren`t admin =/ </h2>
  }

  return (
    <LayoutForClients title="Настройки">
      <Container>
        <PageWrapper>
          {user?.isAdmin ? <AdminMainPage /> : <Button onClick={logIn}>Google</Button>}
        </PageWrapper>
      </Container>
    </LayoutForClients>
  )
}

export default Admin

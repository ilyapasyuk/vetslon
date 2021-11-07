import { Container } from '@mui/material'
import React, { useContext } from 'react'

import { LayoutForAdmin } from 'Components/LayoutForAdmin'

import { StoreContext } from 'Contexts/store'

interface AdminMainPageProps {}

const AdminMainPage = ({}: AdminMainPageProps) => {
  const { state, dispatch } = useContext(StoreContext)

  return (
    <Container>
      <LayoutForAdmin>admin</LayoutForAdmin>
    </Container>
  )
}

export { AdminMainPage }

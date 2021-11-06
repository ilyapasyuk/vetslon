import { LayoutForAdmin } from 'Components/LayoutForAdmin'
import React, { useContext, useEffect } from 'react'
import { Container } from '@mui/material'

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

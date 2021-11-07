import { Container } from '@mui/material'
import React from 'react'

import { AdminServicesPage } from 'Containers/AdminServicesPage'

import { LayoutForAdmin } from 'Components/LayoutForAdmin'
import { LayoutForClients } from 'Components/LayoutForClients'

interface ServicesProps {}

const ServicesPage = ({}: ServicesProps) => {
  return (
    <LayoutForClients title="Услуги и цены">
      <Container>
        <LayoutForAdmin>
          <AdminServicesPage />
        </LayoutForAdmin>
      </Container>
    </LayoutForClients>
  )
}

export default ServicesPage

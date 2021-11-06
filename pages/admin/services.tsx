import { Container } from '@mui/material'
import React from 'react'

import { LayoutForAdmin } from 'Components/LayoutForAdmin'
import { LayoutForClients } from 'Components/LayoutForClients'

interface ServicesProps {}

const ServicesPage = ({}: ServicesProps) => {
  return (
    <LayoutForClients title="Услуги и цены">
      <Container>
        <LayoutForAdmin>Services</LayoutForAdmin>
      </Container>
    </LayoutForClients>
  )
}

export default ServicesPage

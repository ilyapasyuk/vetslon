import React from 'react'
import { Container } from '@mui/material'

import { LayoutForAdmin } from 'Components/LayoutForAdmin'
import { LayoutForClients } from 'Components/LayoutForClients'

interface ServicesProps {}

const Services = ({}: ServicesProps) => {
  return (
    <LayoutForClients title="О нас">
      <Container>
        <LayoutForAdmin>о нас</LayoutForAdmin>
      </Container>
    </LayoutForClients>
  )
}

export default Services

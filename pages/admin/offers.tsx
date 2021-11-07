import { Container } from '@mui/material'
import React from 'react'

import { LayoutForAdmin } from 'Components/LayoutForAdmin'
import { LayoutForClients } from 'Components/LayoutForClients'

interface OffersProps {}

const Offers = ({}: OffersProps) => {
  return (
    <LayoutForClients title="Акции">
      <Container>
        <LayoutForAdmin>акции</LayoutForAdmin>
      </Container>
    </LayoutForClients>
  )
}

export default Offers

import { Container } from '@mui/material'
import { LayoutForAdmin } from 'Components/LayoutForAdmin'
import { LayoutForClients } from 'Components/LayoutForClients'
import React from 'react'

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

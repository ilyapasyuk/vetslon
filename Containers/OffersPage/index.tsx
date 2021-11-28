import { Container } from '@mui/material'
import React from 'react'

import { ContactFormWide } from 'Components/ContactFormWide'
import { LayoutForClients } from 'Components/LayoutForClients'
import { Surface } from 'Components/Surface'

interface OffersPageProps {}

const OffersPage = ({}: OffersPageProps) => {
  return (
    <LayoutForClients title="Акции">
      <Surface>
        <Container>
          <ContactFormWide />
        </Container>
      </Surface>
    </LayoutForClients>
  )
}

export { OffersPage }

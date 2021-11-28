import { Container } from '@mui/material'
import React from 'react'

import { ContactFormWide } from 'Components/ContactFormWide'
import { LayoutForClients } from 'Components/LayoutForClients'
import { Surface } from 'Components/Surface'

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <LayoutForClients title="СЛОН">
      <Surface>
        <Container>
          <ContactFormWide />
        </Container>
      </Surface>
    </LayoutForClients>
  )
}

export { HomePage }

import { Container } from '@mui/material'
import React from 'react'

import { ContactFormWide } from 'Components/ContactFormWide'
import { LayoutForClients } from 'Components/LayoutForClients'
import { Surface } from 'Components/Surface'

interface ContactsPageProps {}

const ContactsPage = ({}: ContactsPageProps) => {
  return (
    <LayoutForClients title="Контакты">
      <Surface>
        <Container>
          <ContactFormWide />
        </Container>
      </Surface>
    </LayoutForClients>
  )
}

export { ContactsPage }

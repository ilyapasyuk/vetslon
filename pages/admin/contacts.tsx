import React from 'react'
import { Container } from '@mui/material'

import { LayoutForAdmin } from 'Components/LayoutForAdmin'
import { LayoutForClients } from 'Components/LayoutForClients'

interface ContactsProps {}

const Contacts = ({}: ContactsProps) => {
  return (
    <LayoutForClients title="Контакты">
      <Container>
        <LayoutForAdmin>Contacts</LayoutForAdmin>
      </Container>
    </LayoutForClients>
  )
}

export default Contacts

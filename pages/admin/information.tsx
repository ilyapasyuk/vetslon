import { Container } from '@mui/material'
import React from 'react'

import { LayoutForAdmin } from 'Components/LayoutForAdmin'
import { LayoutForClients } from 'Components/LayoutForClients'

interface InfoProps {}

const Info = ({}: InfoProps) => {
  return (
    <LayoutForClients title="Сертификаты">
      <Container>
        <LayoutForAdmin>Info</LayoutForAdmin>
      </Container>
    </LayoutForClients>
  )
}

export default Info

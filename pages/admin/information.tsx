import React from 'react'
import { Container } from '@mui/material'

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

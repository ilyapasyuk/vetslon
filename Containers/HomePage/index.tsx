import { Container } from '@mui/material'
import React from 'react'

import { StyledHomeWrapper } from 'Containers/HomePage/styled'

import { ContactFormWide } from 'Components/ContactFormWide'
import { LayoutForClients } from 'Components/LayoutForClients'
import { PageIntro } from 'Components/PageIntro'
import { Surface } from 'Components/Surface'

import slider1 from '../../public/slider_bg01.jpeg'

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <LayoutForClients title="СЛОН">
      <PageIntro backgroundImage={slider1.src} title="ВетСЛОН" />
      <Surface>
        <StyledHomeWrapper>
          <Container>
            <ContactFormWide />
          </Container>
        </StyledHomeWrapper>
      </Surface>
    </LayoutForClients>
  )
}

export { HomePage }

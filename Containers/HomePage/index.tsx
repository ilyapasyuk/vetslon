import { Container } from '@mui/material'
import React from 'react'
import { FcHome, FcMoneyTransfer, FcOvertime, FcReading } from 'react-icons/fc'

import { StyledHomeWrapper } from 'Containers/HomePage/styled'

import { ContactFormWide } from 'Components/ContactFormWide'
import { HomeServices } from 'Components/HomeServices'
import { LayoutForClients } from 'Components/LayoutForClients'
import { PageIntro } from 'Components/PageIntro'
import { IPromo, Promo } from 'Components/Promo'
import { Surface } from 'Components/Surface'

import slider1 from '../../public/slider_bg01.jpeg'

const PROMO: IPromo[] = [
  { title: 'Максимальный комфорт', image: <FcHome /> },
  { title: 'Доступные  цены', image: <FcMoneyTransfer /> },
  { title: 'Современная диагностика', image: <FcReading /> },
  { title: 'Ветеринар 24/7', image: <FcOvertime /> },
]

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <LayoutForClients title="СЛОН">
      <PageIntro backgroundImage={slider1.src} title="ВетСЛОН" size={'large'} />
      <Container>
        <Promo promo={PROMO} />
      </Container>

      <Container>
        <HomeServices />
      </Container>

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

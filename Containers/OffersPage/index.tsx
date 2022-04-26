import { Container } from '@mui/material'
import offer1 from 'public/offers/offer_1.jpeg'
import pugImage from 'public/pug_1.png'
import React from 'react'

import { OfferType } from 'services/offers'

import { ContactFormWide } from 'Components/ContactFormWide'
import { LayoutForClients } from 'Components/LayoutForClients'
import { Offer } from 'Components/Offer'
import { PageIntro } from 'Components/PageIntro'
import { PageWrapper } from 'Components/PageWrapper'
import { Surface } from 'Components/Surface'

import { StyledOffers } from './style'

interface OffersPageProps {}

const offers: OfferType[] = [
  {
    title: 'Дарим скидки за подписки',
    description:
      'Присоединяйтесь к нам в социальных сетях и следите за новостями, акциями и событиями!',
    image: offer1.src,
  },
  // {
  //   title: 'Скидка 10% за отзыв',
  //   description:
  //     'На все услуги при размещении вашего честного отзыва на сервисах Яндекс.Карты или Google Карты',
  //   image: offer2.src,
  // },
]

const OffersPage = ({}: OffersPageProps) => {
  return (
    <LayoutForClients title="Акции">
      <PageIntro backgroundImage={pugImage.src} title="Акции и предложения" />
      <Surface>
        <PageWrapper>
          <Container>
            <StyledOffers>
              {offers.map(offer => (
                <Offer key={offer.title} offer={offer} />
              ))}
            </StyledOffers>

            <ContactFormWide />
          </Container>
        </PageWrapper>
      </Surface>
    </LayoutForClients>
  )
}

export { OffersPage }

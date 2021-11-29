import { Container } from '@mui/material'
import offer1 from 'public/offers/offer_1.jpeg'
import offer2 from 'public/offers/offer_2.jpg'
import React from 'react'

import { OfferType } from 'services/offers'

import { StyledOffers } from 'Containers/OffersPage/style'

import { ContactFormWide } from 'Components/ContactFormWide'
import { LayoutForClients } from 'Components/LayoutForClients'
import { Offer } from 'Components/Offer'
import { Surface } from 'Components/Surface'

interface OffersPageProps {}

const offers: OfferType[] = [
  {
    title: 'Дарим скидки за подписки',
    description:
      'Присоединяйтесь к нам в социальных сетях и следите за новостями, акциями и событиями!',
    image: offer1.src,
  },
  {
    title: 'Скидка за отзыв 10%',
    description:
      'На все услуги при размещении вашего честного отзыва на сервисах Яндекс.Карты или Google Карты',
    image: offer2.src,
  },
]

const OffersPage = ({}: OffersPageProps) => {
  return (
    <LayoutForClients title="Акции">
      <Surface>
        <Container>
          <StyledOffers>
            {offers.map(offer => (
              <Offer key={offer.title} offer={offer} />
            ))}
          </StyledOffers>

          <ContactFormWide />
        </Container>
      </Surface>
    </LayoutForClients>
  )
}

export { OffersPage }

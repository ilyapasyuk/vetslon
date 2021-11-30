import React from 'react'

import { OfferType } from 'services/offers'

import { StyledOffer } from 'Components/Offer/style'

interface OfferProps {
  offer: OfferType
}

const Offer = ({ offer }: OfferProps) => {
  return (
    <StyledOffer style={{ backgroundImage: `url("${offer.image}")` }}>
      <h2>{offer.title}</h2>
      <h5>{offer.description}</h5>
    </StyledOffer>
  )
}

export { Offer }

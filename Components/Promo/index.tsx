import React from 'react'

import { StyledPromo, StyledPromoIcon, StyledPromoItem } from './styles'

export interface IPromo {
  image: React.ReactNode
  title: string
}

interface PromoProps {
  promo: IPromo[]
}

const Promo = ({ promo }: PromoProps) => {
  return (
    <StyledPromo>
      {promo.map(item => (
        <StyledPromoItem key={item.title}>
          <StyledPromoIcon>{item.image}</StyledPromoIcon>
          <h5>{item.title}</h5>
        </StyledPromoItem>
      ))}
    </StyledPromo>
  )
}

export { Promo }

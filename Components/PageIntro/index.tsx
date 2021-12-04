import { Container } from '@mui/material'
import React from 'react'

import shape01 from '../../public/slider_shape01.png'
import shape02 from '../../public/slider_shape02.png'
import {
  StyledPageIntro,
  StyledPageIntroShape1,
  StyledPageIntroShape2,
  StyledPageIntroTitle,
} from './styles'

interface PageIntroProps {
  backgroundImage: string
  title: string
  size?: 'default' | 'large'
}

const PageIntro = ({ backgroundImage, title, size = 'default' }: PageIntroProps) => {
  return (
    <StyledPageIntro backgroundImage={backgroundImage} size={size}>
      <StyledPageIntroShape1 src={shape01.src} />
      <StyledPageIntroShape2 src={shape02.src} />
      <Container>
        <StyledPageIntroTitle>{title}</StyledPageIntroTitle>
      </Container>
    </StyledPageIntro>
  )
}

export { PageIntro }

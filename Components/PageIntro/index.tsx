import { Container } from '@mui/material'
import React from 'react'

import { StyledPageIntro, StyledPageIntroTitle } from './styles'

interface PageIntroProps {
  backgroundImage: string
  title: string
}

const PageIntro = ({ backgroundImage, title }: PageIntroProps) => {
  return (
    <StyledPageIntro backgroundImage={backgroundImage}>
      <Container>
        <StyledPageIntroTitle>{title}</StyledPageIntroTitle>
      </Container>
    </StyledPageIntro>
  )
}

export { PageIntro }

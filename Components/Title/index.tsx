import React from 'react'

import { StyledH1, StyledH2, StyledH3, StyledH4 } from './style'

interface TitleProps {
  type: 'h1' | 'h2' | 'h3' | 'h4'
  children: React.ReactNode | string
}

const Title = ({ type, children }: TitleProps) => {
  switch (type) {
    case 'h4':
      return <StyledH4>{children}</StyledH4>
    case 'h3':
      return <StyledH3>{children}</StyledH3>
    case 'h2':
      return <StyledH2>{children}</StyledH2>
    case 'h1':
    default:
      return <StyledH1>{children}</StyledH1>
  }
}

export { Title }

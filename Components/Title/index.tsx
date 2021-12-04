import React from 'react'

import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledXXL } from './style'

interface TitleProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'XXL'
  children: React.ReactNode | string
  indent?: boolean
}

const Title = ({ type, children, indent = true }: TitleProps) => {
  switch (type) {
    case 'h5':
      return <StyledH5 indent={indent}>{children}</StyledH5>
    case 'h4':
      return <StyledH4 indent={indent}>{children}</StyledH4>
    case 'h3':
      return <StyledH3 indent={indent}>{children}</StyledH3>
    case 'h2':
      return <StyledH2 indent={indent}>{children}</StyledH2>
    case 'XXL':
      return <StyledXXL indent={indent}>{children}</StyledXXL>
    case 'h1':
    default:
      return <StyledH1 indent={indent}>{children}</StyledH1>
  }
}

export { Title }

import React from 'react'

import { StyledPageWrapper } from './style'

interface PageWrapperProps {
  children: React.ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>
}

export { PageWrapper }

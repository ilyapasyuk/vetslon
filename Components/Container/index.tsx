import React from 'react'
import { StyledContainer } from './style'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>
}

export { Container }

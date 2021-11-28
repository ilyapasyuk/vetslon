import React from 'react'

import { StyledButton } from 'Components/Button/styles'

export type ButtonVariantType = {
  variant?: 'default' | 'clear'
}

interface ButtonProps extends ButtonVariantType {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick, variant = 'default' }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  )
}

export { Button }

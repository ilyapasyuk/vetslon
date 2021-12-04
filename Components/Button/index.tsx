import React from 'react'

import { StyledButton } from 'Components/Button/styles'

export type ButtonVariantType = {
  variant?: 'default' | 'clear'
  size?: 'default' | 'small'
}

interface ButtonProps extends ButtonVariantType {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick, variant = 'default', size = 'default' }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant} size={size}>
      {children}
    </StyledButton>
  )
}

export { Button }

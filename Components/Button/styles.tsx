import styled, { css } from 'styled-components'

import { ButtonVariantType } from 'Components/Button/index'

interface StyledButtonProps extends ButtonVariantType {}

const StyledButton = styled.button<StyledButtonProps>`
  user-select: none;
  background: ${props => props.theme.primaryColor} none repeat scroll 0 0;
  border: medium none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1;
  margin-bottom: 0;
  padding: 17px 25px;
  text-align: center;
  touch-action: manipulation;
  transition: all 0.3s ease 0s;
  vertical-align: middle;
  white-space: nowrap;
  font-family: 'Nunito', sans-serif;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 10px;

  &:hover {
    &:before {
      top: 0;
    }
  }

  &:before {
    content: '';
    position: absolute;
    -webkit-transition-duration: 800ms;
    transition-duration: 800ms;
    width: 200%;
    height: 200%;
    top: 110%;
    left: 50%;
    background: #0a303a;
    transform: translateX(-50%);
    border-radius: 50%;
    z-index: -1;
  }

  ${props =>
    props.variant === 'clear' &&
    css`
      color: ${props.theme.primaryColor};
      background-color: white;
    `}
`

export { StyledButton }

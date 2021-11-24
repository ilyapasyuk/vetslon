import React from 'react'
import { FaHeadphones } from 'react-icons/fa'

import {
  StyledPhoneNumber,
  StyledPhoneNumberIcon,
  StyledPhoneNumberSlogan,
} from 'Components/PhoneNumber/style'
import { Title } from 'Components/Title'

interface PhoneNumberProps {
  phoneNumber: string
}

const PhoneNumber = ({ phoneNumber }: PhoneNumberProps) => {
  return (
    <StyledPhoneNumber>
      <StyledPhoneNumberIcon>
        <FaHeadphones />
      </StyledPhoneNumberIcon>
      <div>
        <Title type="h4">
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </Title>
        <StyledPhoneNumberSlogan>Позвоните нам</StyledPhoneNumberSlogan>
      </div>
    </StyledPhoneNumber>
  )
}

export { PhoneNumber }

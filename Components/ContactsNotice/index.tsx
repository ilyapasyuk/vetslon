import React from 'react'
import { Container } from '@mui/material'

import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'

import { CONFIG } from 'CONFIG'

import { IGlobalInfo } from 'services/clinic'

import {
  StyledContactNotice,
  StyledContactNoticeWrapper,
  StyledContactNoticePhone,
  StyledContactNoticeSocialNetworks,
  StyledContactNoticeSocialNetwork,
} from './styles'

interface ContactsNoticeProps extends IGlobalInfo {}

interface SocialNetwork {
  logo: React.ReactNode
  url: string
}

const SOCIAL_NETWORKS: SocialNetwork[] = [
  { logo: AiOutlineInstagram, url: CONFIG.instagramUrl },
  { logo: AiOutlineWhatsApp, url: CONFIG.whatsappUrl },
  { logo: FaTelegramPlane, url: CONFIG.telegramUrl },
]

const ContactsNotice = ({ appName, phoneNumber, email, slogan }: ContactsNoticeProps) => {
  return (
    <StyledContactNotice>
      <Container>
        <StyledContactNoticeWrapper>
          <div>Работаем: {CONFIG.workingHours}</div>
          <div>
            Позвоните нам:{' '}
            <StyledContactNoticePhone href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </StyledContactNoticePhone>
          </div>
          <StyledContactNoticeSocialNetworks>
            {SOCIAL_NETWORKS.map(network => (
              <StyledContactNoticeSocialNetwork
                href={network.url}
                target="_blank"
                key={network.url}
              >
                {/*@ts-ignore*/}
                <network.logo />
              </StyledContactNoticeSocialNetwork>
            ))}
          </StyledContactNoticeSocialNetworks>
        </StyledContactNoticeWrapper>
      </Container>
    </StyledContactNotice>
  )
}

export { ContactsNotice }

import { CONFIG } from 'CONFIG'
import { NextPage } from 'next'
import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'

import { Container } from 'Components/Container'

import {
  StyledContactNotice,
  StyledContactNoticeWrapper,
  StyledContactNoticePhone,
  StyledContactNoticeSocialNetworks,
  StyledContactNoticeSocialNetwork,
} from './styles'

interface ContactsNoticeProps {}

interface SocialNetwork {
  logo: React.ReactNode
  url: string
}

const SOCIAL_NETWORKS: SocialNetwork[] = [
  { logo: AiOutlineInstagram, url: CONFIG.instagramUrl },
  { logo: AiOutlineWhatsApp, url: CONFIG.whatsappUrl },
  { logo: FaTelegramPlane, url: CONFIG.telegramUrl },
]

const ContactsNotice: NextPage = ({}: ContactsNoticeProps) => {
  return (
    <StyledContactNotice>
      <Container>
        <StyledContactNoticeWrapper>
          <div>Работаем: {CONFIG.workingHours}</div>
          <div>
            Позвоните нам:{' '}
            <StyledContactNoticePhone href={`tel:${CONFIG.phoneNumber}`}>
              {CONFIG.phoneNumber}
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

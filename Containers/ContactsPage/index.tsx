import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import vasyaImage from 'public/vasya.png'
import React from 'react'
import { BsMailbox2 } from 'react-icons/bs'
import { FaHeadphones, FaLocationArrow } from 'react-icons/fa'

import { ContactFormVertical } from 'Components/ContactFormVertical'
import { ContactFormWide } from 'Components/ContactFormWide'
import { LayoutForClients } from 'Components/LayoutForClients'
import { PageIntro } from 'Components/PageIntro'
import { PageWrapper } from 'Components/PageWrapper'
import { Surface } from 'Components/Surface'

import { StyledContactsInfo, StyledContactsInfoItem } from './styles'

interface ContactsPageProps {}

const ContactsPage = ({}: ContactsPageProps) => {
  return (
    <LayoutForClients title="Контакты">
      <PageIntro backgroundImage={vasyaImage.src} title="Контакты" />
      <Surface>
        <PageWrapper>
          <Container maxWidth="md">
            <Grid container spacing={8} style={{ marginBottom: 80 }}>
              <Grid item xs={12} sm={6} md={6}>
                <ContactFormVertical />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <StyledContactsInfo>
                  <Image
                    src="/contacts/contacts.png"
                    layout="intrinsic"
                    width={400}
                    height={400}
                    alt="Контакты"
                  />

                  <StyledContactsInfoItem>
                    <span className="icon">
                      <FaLocationArrow />
                    </span>
                    Работаем по Санкт-Петербургу и Ленинградской области
                  </StyledContactsInfoItem>

                  <StyledContactsInfoItem>
                    <span className="icon">
                      <FaHeadphones />
                    </span>
                    <a href="tel:+79111648558">+7 911 164-85-58</a>
                  </StyledContactsInfoItem>

                  <StyledContactsInfoItem>
                    <span className="icon">
                      <BsMailbox2 />
                    </span>
                    <a href="mailto:vetslon@bk.ru">vetslon@bk.ru</a>
                  </StyledContactsInfoItem>
                </StyledContactsInfo>
              </Grid>
            </Grid>
          </Container>

          <Container>
            <ContactFormWide />
          </Container>
        </PageWrapper>
      </Surface>
    </LayoutForClients>
  )
}

export { ContactsPage }

import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import vasyaImage from 'public/vasya.png'
import React, { useState } from 'react'
import { BsMailbox2 } from 'react-icons/bs'
import { FaHeadphones, FaLocationArrow } from 'react-icons/fa'

import { sendMessageToGroup } from 'services/telegram'

import { Button } from 'Components/Button'
import { ContactFormWide } from 'Components/ContactFormWide'
import { LayoutForClients } from 'Components/LayoutForClients'
import { PageIntro } from 'Components/PageIntro'
import { Surface } from 'Components/Surface'
import { Title } from 'Components/Title'

import {
  StyledContactsField,
  StyledContactsInfo,
  StyledContactsInfoItem,
  StyledContactsWrapper,
} from './styles'

interface ContactForm {
  name: string
  phone: string
  email: string
  message: string
}

interface ContactsPageProps {}

const ContactsPage = ({}: ContactsPageProps) => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
    phone: '',
  })

  const handleForm = async () => {
    const message: string = `<b>Сообщение со страницы контакты:</b> <b>Имя:</b> ${contactForm.name} <b>E-mail:</b> ${contactForm.email} <b>Сообщение:</b> ${contactForm.message} <b>Телефон:</b> ${contactForm.phone}`

    try {
      await sendMessageToGroup(message, 'HTML')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <LayoutForClients title="Контакты">
      <PageIntro backgroundImage={vasyaImage.src} title="Контакты" />
      <Surface>
        <StyledContactsWrapper>
          <Container maxWidth="md">
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6} md={6}>
                <Title type="h1">Свяжитесь с нами</Title>
                <p>Работаем по Санкт-Петербургу и Ленинградской области</p>
                <StyledContactsField>
                  <label htmlFor="contacts_name">Ваше имя или питомца</label>
                  <input
                    id="contacts_name"
                    type="text"
                    placeholder="Василек"
                    autoComplete="name"
                    value={contactForm.name}
                    onChange={event => setContactForm({ ...contactForm, name: event.target.value })}
                  />
                </StyledContactsField>
                <StyledContactsField>
                  <label htmlFor="contacts_phone">Телефон *</label>
                  <input
                    id="contacts_phone"
                    type="text"
                    placeholder="8 921 765 8693"
                    autoComplete="tel"
                    value={contactForm.phone}
                    onChange={event =>
                      setContactForm({ ...contactForm, phone: event.target.value })
                    }
                  />
                </StyledContactsField>
                <StyledContactsField>
                  <label htmlFor="contacts_mail">E-mail</label>
                  <input
                    id="contacts_mail"
                    type="text"
                    placeholder="cat@mail.ru"
                    autoComplete="email"
                    value={contactForm.email}
                    onChange={event =>
                      setContactForm({ ...contactForm, email: event.target.value })
                    }
                  />
                </StyledContactsField>
                <StyledContactsField>
                  <label htmlFor="contacts_message">Вопрос</label>
                  <textarea
                    id="contacts_message"
                    rows={7}
                    value={contactForm.message}
                    onChange={event =>
                      setContactForm({ ...contactForm, message: event.target.value })
                    }
                  />
                </StyledContactsField>
                <Button onClick={handleForm}>Отправить</Button>
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
        </StyledContactsWrapper>
        <StyledContactsWrapper>
          <Container>
            <ContactFormWide />
          </Container>
        </StyledContactsWrapper>
      </Surface>
    </LayoutForClients>
  )
}

export { ContactsPage }

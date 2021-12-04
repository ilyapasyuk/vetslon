import { Grid } from '@mui/material'
import React, { useState } from 'react'

import { sendMessageToGroup } from 'services/telegram'

import { Button } from 'Components/Button'
import { Title } from 'Components/Title'

import { StyledContactsField, StyledContactsFormVertical } from './styles'

interface ContactForm {
  name: string
  phone: string
  email: string
  message: string
}

interface ContactFormVerticalProps {
  question?: string
}

const ContactFormVertical = ({ question = '' }: ContactFormVerticalProps) => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: question ? `Вопрос о ${question}: ` : '',
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
    <StyledContactsFormVertical>
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
          onChange={event => setContactForm({ ...contactForm, phone: event.target.value })}
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
          onChange={event => setContactForm({ ...contactForm, email: event.target.value })}
        />
      </StyledContactsField>
      <StyledContactsField>
        <label htmlFor="contacts_message">Вопрос</label>
        <textarea
          id="contacts_message"
          rows={7}
          value={contactForm.message}
          onChange={event => setContactForm({ ...contactForm, message: event.target.value })}
        />
      </StyledContactsField>
      <Button onClick={handleForm}>Отправить</Button>
    </StyledContactsFormVertical>
  )
}

export { ContactFormVertical }

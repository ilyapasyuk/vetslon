import { Snackbar } from '@mui/material'
import { sendMessageToGroup } from 'pages/telegram'
import React, { useState } from 'react'

import { Request, createRequest } from 'services/requests'

import { Button } from 'Components/Button'
import {
  StyledContactFormWide,
  StyledContactFormWideFields,
} from 'Components/ContactFormWide/styles'
import { Surface } from 'Components/Surface'
import { Title } from 'Components/Title'

interface ContactFormWideProps {}

const ContactFormWide = ({}: ContactFormWideProps) => {
  const [request, setRequest] = useState<Request>({ name: '', phoneNumber: '' })
  const [messageStatus, setMessageStatus] = useState<'pending' | 'success' | 'loading'>('pending')

  const sendForm = async (request: Request) => {
    setMessageStatus('loading')

    try {
      await createRequest(request)
      await sendMessageToGroup(`${request.name}: ${request.phoneNumber}`)
      setMessageStatus('success')
    } catch (error) {
      console.error(error)
    } finally {
      setMessageStatus('pending')
    }
  }

  return (
    <Surface>
      <Snackbar
        open={messageStatus === 'success'}
        message="Заявка отправлена, мы скоро с вами свяжемся"
      />

      <StyledContactFormWide>
        <Title type="h2">ВЫЗОВ ВРАЧА НА ДОМ ЗА 500 РУБ.</Title>
        <Title type="h3">Мы работаем в Санкт-Петербурге, пригородах и Ленобласти.</Title>
        <Title type="h4">Вызовы принимаются круглосуточно!</Title>

        <StyledContactFormWideFields>
          <div>
            <input
              style={{ color: '#676666' }}
              id="firstName"
              autoComplete="name"
              placeholder="Имя"
              value={request.name}
              onChange={event => setRequest({ ...request, name: event.target.value })}
            />
          </div>

          <div>
            <input
              style={{ width: '100%' }}
              id="phoneNumber"
              autoComplete="tel"
              required
              placeholder="Номер телефона *"
              value={request.phoneNumber}
              onChange={event => setRequest({ ...request, phoneNumber: event.target.value })}
            />
          </div>

          <Button onClick={() => sendForm(request)} variant="clear">
            Вызвать врача
          </Button>
        </StyledContactFormWideFields>
      </StyledContactFormWide>
    </Surface>
  )
}

export { ContactFormWide }

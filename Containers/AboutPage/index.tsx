import { Card, CardContent, Container, Grid } from '@mui/material'
import dogImage from 'public/dog_1.png'
import React from 'react'

import {
  StyledAboutPageWrapper,
  StyledAboutWhyWeDescription,
  StyledAboutWhyWeTitle,
} from 'Containers/AboutPage/style'

import { LayoutForClients } from 'Components/LayoutForClients'
import { PageIntro } from 'Components/PageIntro'
import { Surface } from 'Components/Surface'
import { Title } from 'Components/Title'

interface AboutPageProps {}

interface IBenefit {
  title: string
  description: string
}

const BENEFITS: IBenefit[] = [
  { title: '01', description: 'Современные методы обследования' },
  {
    title: '02',
    description:
      'Высокая степень ответственности за проведенную диагностику, профилактику и оказанное лечение каждого пациента',
  },
  {
    title: '03',
    description: 'Гарантия обоснованного назначения процедур, препаратов и методов лечения',
  },
  { title: '04', description: 'Менеджмент качества оказания услуг' },
  {
    title: '05',
    description: 'Постоянное развитие знаний, навыков и практического опыта персонала',
  },
  { title: '06', description: 'Безупречная вежливость и внимательность персонала' },
  { title: '07', description: 'Цены ниже, чем у конкурентов' },
]

const AboutPage = ({}: AboutPageProps) => {
  return (
    <LayoutForClients title="О нас">
      <PageIntro backgroundImage={dogImage.src} title="О нас" />
      <Surface>
        <Container>
          <StyledAboutPageWrapper>
            <p>
              Круглосуточная ветеринарная выездная служба Вет Слон - это скорая служба помощи Вашим
              питомцам. Мы - команда профессиональных ветеринарных врачей, которые обладают опытом
              работы в ветеринарной сфере более 10 лет. Мы заинтересованы идти в ногу со временем и
              ,поэтому , постоянно повышаем свой профессиональный статус. Наши квалифицированные
              специалисты помогут вашим питомцам решить любую проблему. Мы предоставляем широкий
              спектр услуг: терапия, лабораторная диагностика, хирургия, офтальмология,ортопедия и
              травматология, дерматология, стоматология, онкология, кардиология для кошек, собак и
              экзотических животных.
            </p>
            <p>
              Обращаясь за помощью к Нам - Вы можете быть уверенны, что каждый пациент для нас имеет
              особое значение. Внимание, забота и индивидуальный подход - это наше второе имя! Мы не
              ищем легких путей - мы решаем проблему и делаем все, чтобы достичь результата!
            </p>
            <blockquote>
              “Наша цель - дарить счастье вам и вашим любимым питомцам”
              <footer>Сергей Лях, руководитель клиники</footer>
            </blockquote>
          </StyledAboutPageWrapper>
        </Container>
      </Surface>

      <Container>
        <StyledAboutPageWrapper>
          <Title type="h1">Почему мы?</Title>

          <Grid container spacing={5}>
            {BENEFITS.map(benefit => (
              <Grid key={benefit.title} item xs={6} sm={4} md={3}>
                <Card style={{ height: '100%' }} variant="outlined">
                  <CardContent>
                    <StyledAboutWhyWeTitle>
                      <Title type="XXL">{benefit.title}</Title>
                    </StyledAboutWhyWeTitle>
                    <StyledAboutWhyWeDescription>{benefit.description}</StyledAboutWhyWeDescription>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </StyledAboutPageWrapper>
      </Container>
    </LayoutForClients>
  )
}

export { AboutPage }

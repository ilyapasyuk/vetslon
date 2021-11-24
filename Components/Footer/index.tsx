import { Container, Grid } from '@mui/material'
import { CONFIG } from 'CONFIG'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ClientPageType } from 'services/pages'

import { StyledFooter, StyledFooterMenu } from 'Components/Footer/style'
import { PhoneNumber } from 'Components/PhoneNumber'
import { Title } from 'Components/Title'

interface FooterProps {
  menu: ClientPageType[]
}

const Footer = ({ menu }: FooterProps) => {
  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={4}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={12}>
                <Image src="/logo.png" width={100} height={85} />
              </Grid>
              <Grid item xs={6} sm={12}>
                <p>{CONFIG.slogan}</p>
              </Grid>
            </Grid>
            <PhoneNumber phoneNumber={CONFIG.phoneNumber} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Title type="h2">Меню</Title>

            <StyledFooterMenu>
              {menu.map(item => (
                <div key={item.url}>
                  <Link href={item.url}>{item.title}</Link>
                </div>
              ))}
            </StyledFooterMenu>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Title type="h2">Instagram</Title>
            TODO:
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  )
}

export { Footer }

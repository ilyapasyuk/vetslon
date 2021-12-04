import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Modal,
} from '@mui/material'
import React, { useContext, useState } from 'react'

import { ContactFormVertical } from 'Components/ContactFormVertical'
import { Title } from 'Components/Title'

import { StoreContext } from 'Contexts/store'

import { StyledHomeService } from './styles'

interface HomeServicesProps {}

const HomeServices = ({}: HomeServicesProps) => {
  const { state } = useContext(StoreContext)
  const [modal, setModal] = useState<{ isShow: boolean; questionAbout: string }>({
    isShow: false,
    questionAbout: '',
  })

  return (
    <StyledHomeService>
      <Grid container spacing={4} style={{ marginBottom: 80 }}>
        {state.servicesCategories.map(category => (
          <Grid item xs={12} sm={6} md={4} key={category.title} style={{}}>
            <Card
              style={{
                borderRadius: 15,
                boxShadow: '0px 92px 139.16px 2.84px rgb(0 0 0 / 5%)',
                border: 0,
              }}
              variant="outlined"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  image="/services/1.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Title type="h5">{category.title}</Title>
                </CardContent>
              </CardActionArea>

              <CardActions disableSpacing>
                <Button
                  size="small"
                  onClick={() => setModal({ isShow: true, questionAbout: category.title })}
                >
                  Задать вопрос
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal open={modal.isShow} onClose={() => setModal({ isShow: false, questionAbout: '' })}>
        <Container maxWidth="sm" style={{ padding: 20 }}>
          <Card
            style={{
              borderRadius: 15,
              boxShadow: '0px 92px 139.16px 2.84px rgb(0 0 0 / 5%)',
              border: 0,
              padding: 20,
            }}
            variant="outlined"
          >
            <ContactFormVertical question={modal.questionAbout} />
          </Card>
        </Container>
      </Modal>
    </StyledHomeService>
  )
}

export { HomeServices }

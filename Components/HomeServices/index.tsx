import {
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
import { VET_SLON } from 'theme'

import { ClientServiceCategoriesType } from 'services/services'

import { ContactFormVertical } from 'Components/ContactFormVertical'
import { Title } from 'Components/Title'

import { StoreContext } from 'Contexts/store'

import { StyledHomeService } from './styles'

interface CategoriesWithImages extends ClientServiceCategoriesType {
  image: string
}

interface HomeServicesProps {}

const HomeServices = ({}: HomeServicesProps) => {
  const { state } = useContext(StoreContext)
  const [modal, setModal] = useState<{ isShow: boolean; questionAbout: string }>({
    isShow: false,
    questionAbout: '',
  })

  console.log('state.servicesCategories', state.servicesCategories)

  const getImageUrl = (id: string): string => {
    switch (id) {
      case '21JttWjBOtEHBe5FMYbm':
        return '9.jpeg'
      case '7EEOSKmQGQiYoqXSJRkd':
        return '10.jpeg'
      case 'EoknsEMsV8tm2OyAfwUU':
        return '8.jpeg'
      case 'F1RliUcT9FgAFwsxxSwD':
        return '6.jpeg'
      case 'XYPwzq48prL6wvKpejz3':
        return '1.jpeg'
      case 'IkBTXnQL94lK98RMEk9':
        return '7.jpeg'
      case 'p5zvNnQZ9oJinh5RyhNu':
        return '4.jpeg'
      case 'rsTMlc2uLKtyBOd0YVZf':
        return '3.jpeg'
      case '3g3An107RXyysS7RrlwE':
      default:
        return '2.jpeg'
    }
  }

  const preparedServicesCategories: CategoriesWithImages[] = state.servicesCategories.map(
    category => ({
      image: `/services/${getImageUrl(category.id)}`,
      id: category.id,
      title: category.title,
    }),
  )

  return (
    <StyledHomeService>
      <Grid container spacing={4} style={{ marginBottom: 80 }}>
        {preparedServicesCategories.map(category => (
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
                <CardMedia component="img" height="150" image={category.image} alt="green iguana" />
                <CardContent>
                  <Title type="h5">{category.title}</Title>
                </CardContent>
              </CardActionArea>

              <CardActions disableSpacing>
                <Button
                  size="small"
                  onClick={() => setModal({ isShow: true, questionAbout: category.title })}
                  style={{ color: VET_SLON.primaryColor }}
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

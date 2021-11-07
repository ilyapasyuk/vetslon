import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

import {
  ServerServiceCategoriesType,
  createServicesCategory,
  getAllServices,
  getAllServicesCategories,
} from 'services/services'

import { StyledCategoriesList } from 'Containers/AdminServicesPage/style'

import { Title } from 'Components/Title'

import { ACTION } from 'Contexts/actions'
import { StoreContext } from 'Contexts/store'

interface AdminServicesPageProps {}

const AdminServicesPage = ({}: AdminServicesPageProps) => {
  const { state, dispatch } = useContext(StoreContext)
  const [newServicesCategory, setServicesCategory] = useState<ServerServiceCategoriesType>({
    title: '',
  })

  const init = async () => {
    const servicesCategories = await getAllServicesCategories()
    const services = await getAllServices()
    dispatch({ action: ACTION.SET_SERVICES_CATEGORIES, data: servicesCategories })
    dispatch({ action: ACTION.SET_SERVICES, data: services })
  }

  const createCategory = async (newCategory: ServerServiceCategoriesType): Promise<void> => {
    await createServicesCategory(newCategory)
    await init()
    setServicesCategory({ title: '' })
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Title type="h4">Категории услуг</Title>

          <StyledCategoriesList>
            {state.servicesCategories.map(serviceCategory => {
              return (
                <div key={serviceCategory.id}>
                  <TextField
                    fullWidth
                    id={serviceCategory.id}
                    label="Имя категории"
                    type="text"
                    value={serviceCategory.title}
                  />
                </div>
              )
            })}
          </StyledCategoriesList>
        </CardContent>
        <CardActions>
          <Button size="small">Сохранить</Button>
        </CardActions>
      </Card>

      <br />

      <Card variant="outlined">
        <CardContent>
          <Title type="h4">Создать категорию</Title>
          <TextField
            fullWidth
            id="create_new"
            label="Создать категорию"
            type="text"
            value={newServicesCategory.title}
            onChange={event => {
              setServicesCategory({ title: event.target.value })
            }}
          />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => createCategory(newServicesCategory)}>
            Создать
          </Button>
        </CardActions>
      </Card>

      <br />

      {state.servicesCategories.map(category => {
        return (
          <Accordion key={category.id}>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {category.title}
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export { AdminServicesPage }

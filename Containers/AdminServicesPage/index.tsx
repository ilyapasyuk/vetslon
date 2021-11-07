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
  ClientServiceType,
  ServerServiceCategoriesType,
  ServerServiceType,
  createService,
  createServicesCategory,
  deleteService,
  getAllServices,
  getAllServicesCategories,
  updateService,
} from 'services/services'

import { StyledCategoriesList } from 'Containers/AdminServicesPage/style'

import { ServicesList } from 'Components/ServicesList'
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

  const updateServiceInFirebase = async (updatedService: ClientServiceType): Promise<void> => {
    await updateService(updatedService)
    await init()
  }

  const deleteServiceInFirebase = async (serviceForDelete: ClientServiceType): Promise<void> => {
    await deleteService(serviceForDelete)
    await init()
  }

  const createServiceInFirebase = async (
    newService: ServerServiceType,
    categoryId: string,
  ): Promise<void> => {
    const preparedService: ServerServiceType = {
      title: newService.title,
      categoryId: categoryId,
      price: newService.price,
    }

    await createService(preparedService)
    await init()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Title type="h4">Категории и услуги</Title>

          {state.servicesCategories.map(category => {
            const preparedServices = state.services.filter(
              service => service.categoryId === category.id,
            )

            return (
              <Accordion key={category.id}>
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls={category.id}
                  id={category.id}
                >
                  {category.title}
                </AccordionSummary>

                <AccordionDetails>
                  <ServicesList
                    list={preparedServices}
                    onUpdate={updatedService => {
                      updateServiceInFirebase(updatedService)
                    }}
                    onCreate={newServicesCategory =>
                      createServiceInFirebase(newServicesCategory, category.id)
                    }
                    onDelete={serviceCategoryForDelete =>
                      deleteServiceInFirebase(serviceCategoryForDelete)
                    }
                  />
                </AccordionDetails>
              </Accordion>
            )
          })}
        </CardContent>
      </Card>

      <br />

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
    </div>
  )
}

export { AdminServicesPage }

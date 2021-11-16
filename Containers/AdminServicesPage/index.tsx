import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  Snackbar,
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

import { ServicesListEditor } from 'Components/ServicesListEditor'
import { Title } from 'Components/Title'

import { ACTION } from 'Contexts/actions'
import { StoreContext } from 'Contexts/store'

interface AdminServicesPageProps {}

const AdminServicesPage = ({}: AdminServicesPageProps) => {
  const { state, dispatch } = useContext(StoreContext)
  const [newServicesCategory, setServicesCategory] = useState<ServerServiceCategoriesType>({
    title: '',
  })
  const [loadingState, setLoadingState] = useState<'pending' | 'loading' | 'success' | 'error'>(
    'pending',
  )

  const getSnackbarMessage = () => {
    switch (loadingState) {
      case 'success':
        return 'Сохранено'
      case 'error':
        return 'Упс, произошла ошибка, напишите разработчику'
      default:
        return ''
    }
  }

  const init = async () => {
    const servicesCategories = await getAllServicesCategories()
    const services = await getAllServices()
    dispatch({ action: ACTION.SET_SERVICES_CATEGORIES, data: servicesCategories })
    dispatch({ action: ACTION.SET_SERVICES, data: services })
  }

  const createCategory = async (newCategory: ServerServiceCategoriesType): Promise<void> => {
    setLoadingState('loading')
    try {
      await createServicesCategory(newCategory)
      await init()
      setServicesCategory({ title: '' })
    } catch (error) {
      console.error('createCategory:', error)
      setLoadingState('error')
    } finally {
      setLoadingState('success')
    }
  }

  const updateServiceInFirebase = async (updatedService: ClientServiceType): Promise<void> => {
    setLoadingState('loading')
    try {
      await updateService(updatedService)
      await init()
    } catch (error) {
      console.error('updateServiceInFirebase:', error)
      setLoadingState('error')
    } finally {
      setLoadingState('success')
    }
  }

  const deleteServiceInFirebase = async (serviceForDelete: ClientServiceType): Promise<void> => {
    setLoadingState('loading')
    try {
      await deleteService(serviceForDelete)
      await init()
    } catch (error) {
      console.error('deleteServiceInFirebase:', error)
      setLoadingState('error')
    } finally {
      setLoadingState('success')
    }
  }

  const createServiceInFirebase = async (
    newService: ServerServiceType,
    categoryId: string,
  ): Promise<void> => {
    const preparedService: ServerServiceType = {
      title: newService.title,
      categoryId: categoryId,
      price: newService.price,
      isAbovePrice: newService.isAbovePrice,
    }

    setLoadingState('pending')
    try {
      await createService(preparedService)
      await init()
    } catch (error) {
      console.error('deleteServiceInFirebase:', error)
    } finally {
      setLoadingState('success')
    }
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (loadingState === 'success') {
      setTimeout(() => {
        setLoadingState('pending')
      }, 3000)
    }
  }, [loadingState])

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
                  <ServicesListEditor
                    isLoading={loadingState === 'loading'}
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
      <Snackbar open={loadingState === 'success'} message={getSnackbarMessage()} />
    </div>
  )
}

export { AdminServicesPage }

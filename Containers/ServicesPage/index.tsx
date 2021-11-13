import { Accordion, AccordionDetails, AccordionSummary, Container } from '@mui/material'
import corgiImage from 'public/corgi.jpeg'
import React, { useContext, useEffect } from 'react'
import { MdExpandMore } from 'react-icons/md'

import { getAllServices, getAllServicesCategories } from 'services/services'

import {
  StyledServicesPage,
  StyledServicesPageExpandedIcon,
  StyledServicesPageList,
  StyledServicesPageRow,
} from 'Containers/ServicesPage/style'

import { LayoutForClients } from 'Components/LayoutForClients'
import { PageIntro } from 'Components/PageIntro'
import { Title } from 'Components/Title'

import { ACTION } from 'Contexts/actions'
import { StoreContext } from 'Contexts/store'

interface ServicesPageProps {}

const ServicesPage = ({}: ServicesPageProps) => {
  const { state, dispatch } = useContext(StoreContext)

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const servicesCategories = await getAllServicesCategories()
    const services = await getAllServices()
    dispatch({ action: ACTION.SET_SERVICES_CATEGORIES, data: servicesCategories })
    dispatch({ action: ACTION.SET_SERVICES, data: services })
  }

  return (
    <LayoutForClients title="Услуги и цены">
      <PageIntro backgroundImage={corgiImage.src} title="Услуги и цены" />
      <Container>
        <p>* Примечание: Стоимость препаратов не включена.</p>
        <p>
          * Стоимость услуг, не вошедших в прейскурант, оговаривается с ветеринарным врачом в
          зависимости от патологии .
        </p>
        <StyledServicesPage>
          {state.servicesCategories.map((category, index) => {
            const preparedServices = state.services.filter(
              service => service.categoryId === category.id,
            )

            return (
              <Accordion key={category.id} className="StyledAccordionAccordion">
                <AccordionSummary
                  className="StyledAccordionSummary"
                  expandIcon={
                    <StyledServicesPageExpandedIcon>
                      <MdExpandMore />
                    </StyledServicesPageExpandedIcon>
                  }
                  aria-controls={category.id}
                  id={category.id}
                >
                  <Title type="h4" indent={false}>
                    {category.title}
                  </Title>
                </AccordionSummary>

                <AccordionDetails className="StyledAccordionDetails">
                  <StyledServicesPageList>
                    {preparedServices.map(service => {
                      return (
                        <StyledServicesPageRow key={service.id}>
                          <div>{service.title}</div>
                          <div>{service.price}</div>
                        </StyledServicesPageRow>
                      )
                    })}
                  </StyledServicesPageList>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </StyledServicesPage>
      </Container>
    </LayoutForClients>
  )
}

export { ServicesPage }

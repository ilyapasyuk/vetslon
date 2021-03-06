import { Checkbox, IconButton, TextField, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MdAdd, MdDeleteOutline, MdSave } from 'react-icons/md'

import { ClientServiceType, ServerServiceType } from 'services/services'

import { Title } from 'Components/Title'

import { StyledServicesListColumn, StyledServicesListRow } from './style'

interface ServicesListProps {
  list: ClientServiceType[]
  onUpdate: (categoriesList: ClientServiceType) => void
  onCreate: (newService: ServerServiceType) => void
  onDelete: (newService: ClientServiceType) => void
  isLoading: boolean
}

const DEFAULT_SERVICE: ServerServiceType = {
  title: '',
  price: 100,
  categoryId: '',
  isAbovePrice: false,
}

const ServicesListEditor = ({
  list,
  onUpdate,
  onCreate,
  onDelete,
  isLoading,
}: ServicesListProps) => {
  const [stateList, setStateList] = useState<ClientServiceType[]>([])
  const [newService, setNewService] = useState<ServerServiceType>(DEFAULT_SERVICE)

  useEffect(() => {
    setStateList(list)
  }, [list])

  const updateService = (updatedService: ClientServiceType): void => {
    const newList = stateList.map(service => {
      if (service.id === updatedService.id) {
        return updatedService
      }
      return service
    })

    setStateList(newList)
  }

  return (
    <div>
      <StyledServicesListColumn>
        {stateList.map(service => {
          return (
            <StyledServicesListRow key={service.id}>
              <div>
                <TextField
                  disabled={isLoading}
                  fullWidth
                  type="text"
                  value={service.title}
                  label="Имя услуги"
                  onChange={event => {
                    updateService({ ...service, title: event.target.value })
                  }}
                />
              </div>
              <div>
                <Tooltip title="Цена от" arrow placement="top">
                  <Checkbox
                    disabled={isLoading}
                    defaultChecked={service.isAbovePrice}
                    onChange={event => {
                      updateService({ ...service, isAbovePrice: event.target.checked })
                    }}
                  />
                </Tooltip>
              </div>
              <div>
                <TextField
                  disabled={isLoading}
                  fullWidth
                  type="number"
                  value={service.price}
                  label="Цена, .руб"
                  onChange={event => {
                    updateService({ ...service, price: parseInt(event.target.value) })
                  }}
                />
              </div>
              <div>
                <IconButton onClick={() => onDelete(service)} disabled={isLoading}>
                  <MdDeleteOutline color="#f04336" />
                </IconButton>
              </div>
              <div>
                <IconButton onClick={() => onUpdate(service)} disabled={isLoading}>
                  <MdSave />
                </IconButton>
              </div>
            </StyledServicesListRow>
          )
        })}
      </StyledServicesListColumn>

      <br />

      <Title type="h4">Создать новую услугу</Title>

      <StyledServicesListRow>
        <div>
          <TextField
            fullWidth
            type="text"
            value={newService.title}
            label="Имя услуги"
            onChange={event => {
              setNewService({ ...newService, title: event.target.value })
            }}
          />
        </div>
        <div>
          <Tooltip title="Цена от" arrow placement="top">
            <Checkbox
              disabled={isLoading}
              defaultChecked={newService.isAbovePrice}
              onChange={event => {
                setNewService({ ...newService, isAbovePrice: event.target.checked })
              }}
            />
          </Tooltip>
        </div>
        <div>
          <TextField
            fullWidth
            type="number"
            value={newService.price}
            label="Цена, .руб"
            onChange={event => {
              setNewService({ ...newService, price: parseInt(event.target.value) })
            }}
          />
        </div>
        <div>
          <IconButton
            onClick={() => {
              onCreate(newService)
              setNewService(DEFAULT_SERVICE)
            }}
          >
            <MdAdd color="rgb(102, 187, 106)" />
          </IconButton>
        </div>
      </StyledServicesListRow>
    </div>
  )
}

export { ServicesListEditor }

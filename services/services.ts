import { COLLECTION } from 'CONFIG'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore'

import { firestore } from 'services/firebase'

export interface ServerServiceType {
  title: string
  categoryId: string
  price: number
}

export interface ClientServiceType extends ServerServiceType {
  id: string
}

export interface ServerServiceCategoriesType {
  title: string
}

export interface ClientServiceCategoriesType extends ServerServiceCategoriesType {
  id: string
}

const getAllServices = async (): Promise<ClientServiceType[]> => {
  const servicesRef = collection(firestore, COLLECTION.SERVICES)
  let preparedServices: ClientServiceType[] = []

  const servicesSnapshot = await getDocs(servicesRef)
  servicesSnapshot.forEach(doc => {
    preparedServices.push({
      id: doc.id,
      title: doc.get('title'),
      categoryId: doc.get('categoryId'),
      price: doc.get('price'),
    })
  })

  return preparedServices
}

const getAllServicesCategories = async (): Promise<ClientServiceCategoriesType[]> => {
  const servicesRef = collection(firestore, COLLECTION.SERVICES_CATEGORIES)
  let preparedServices: ClientServiceCategoriesType[] = []

  const servicesSnapshot = await getDocs(servicesRef)
  servicesSnapshot.forEach(doc => {
    preparedServices.push({
      id: doc.id,
      title: doc.get('title'),
    })
  })

  return preparedServices
}

const createServicesCategory = async (
  newServicesCategory: ServerServiceCategoriesType,
): Promise<void> => {
  await addDoc(collection(firestore, COLLECTION.SERVICES_CATEGORIES), newServicesCategory)
}

const updateService = async (updatedService: ClientServiceType): Promise<void> => {
  await setDoc(doc(firestore, COLLECTION.SERVICES, updatedService.id), updatedService)
}

const deleteService = async (serviceForDelete: ClientServiceType): Promise<void> => {
  await deleteDoc(doc(firestore, COLLECTION.SERVICES, serviceForDelete.id))
}

const createService = async (newService: ServerServiceType): Promise<void> => {
  await addDoc(collection(firestore, COLLECTION.SERVICES), newService)
}

export {
  getAllServices,
  getAllServicesCategories,
  createServicesCategory,
  updateService,
  deleteService,
  createService,
}

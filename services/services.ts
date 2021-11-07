import { COLLECTION } from 'CONFIG'
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore'

import { firestore } from 'services/firebase'

export type ClientServiceType = {
  id: string
  title: string
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
    })
  })

  return preparedServices
}

const getAllServicesCategories = async (): Promise<ClientServiceType[]> => {
  const servicesRef = collection(firestore, COLLECTION.SERVICES_CATEGORIES)
  let preparedServices: ClientServiceType[] = []

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

export { getAllServices, getAllServicesCategories, createServicesCategory }

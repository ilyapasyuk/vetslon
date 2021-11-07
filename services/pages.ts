import { COLLECTION } from 'CONFIG'
import { collection, doc, getDocs, orderBy, query, setDoc } from 'firebase/firestore'

import { firestore } from 'services/firebase'

export interface ServerPageType {
  title: string
  isAvailable: boolean
  url: string
  position: number
}

export interface ClientPageType extends ServerPageType {
  id: string
}

const getAllPages = async (): Promise<ClientPageType[]> => {
  const servicesRef = collection(firestore, COLLECTION.PAGES)
  const q = query(servicesRef, orderBy('position', 'asc'))

  let preparedPages: ClientPageType[] = []

  const servicesSnapshot = await getDocs(q)

  servicesSnapshot.forEach(doc => {
    preparedPages.push({
      id: doc.id,
      isAvailable: doc.get('isAvailable'),
      title: doc.get('title'),
      url: doc.get('url'),
      position: doc.get('position'),
    })
  })

  return preparedPages
}

const updatePage = async (updatedPage: ClientPageType): Promise<void> => {
  const preparedPageForServer: ServerPageType = {
    ...updatedPage,
    isAvailable: updatedPage.isAvailable,
  }

  await setDoc(doc(firestore, COLLECTION.PAGES, updatedPage.id), preparedPageForServer)
}

export { getAllPages, updatePage }

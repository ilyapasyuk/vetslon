import { collection, getDocs, setDoc, doc } from 'firebase/firestore'

import { firestore } from 'services/firebase'

import { COLLECTION } from 'CONFIG'

export interface ServerPageType {
  title: string
  isAvailable: boolean
  url: string
}

export interface ClientPageType extends ServerPageType {
  id: string
}

const getAllPages = async (): Promise<ClientPageType[]> => {
  const servicesRef = collection(firestore, COLLECTION.PAGES)
  let preparedPages: ClientPageType[] = []

  const servicesSnapshot = await getDocs(servicesRef)

  servicesSnapshot.forEach(doc => {
    preparedPages.push({
      id: doc.id,
      isAvailable: doc.get('isAvailable'),
      title: doc.get('title'),
      url: doc.get('url'),
    })
  })

  return preparedPages
}

const updatePage = async (updatedPage: ClientPageType): Promise<void> => {
  const preparedPageForServer: ServerPageType = {
    isAvailable: updatedPage.isAvailable,
    title: updatedPage.title,
    url: updatedPage.url,
  }

  await setDoc(doc(firestore, COLLECTION.PAGES, updatedPage.id), preparedPageForServer)
}

export { getAllPages, updatePage }

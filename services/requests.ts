import { COLLECTION } from 'CONFIG'
import { addDoc, collection } from 'firebase/firestore'

import { firestore } from 'services/firebase'

export interface Request {
  name: string
  phoneNumber: string
}

const createRequest = async (newService: Request): Promise<void> => {
  await addDoc(collection(firestore, COLLECTION.REQUESTS), newService)
}

export { createRequest }

import { COLLECTION } from 'CONFIG'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { firestore } from 'services/firebase'

export type User = {
  id: string
  avatar: string
  email: string
  fullName: string
  isAdmin: boolean
}

export const LOCAL_STORAGE_KEY = 'user'

const getUser = async (): Promise<User | null> => {
  const userFromLocalStorage: string | null =
    (await window.localStorage.getItem(LOCAL_STORAGE_KEY)) || null
  return userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null
}

const checkUserForAdminRights = async (userEmail: string): Promise<boolean> => {
  const servicesRef = collection(firestore, COLLECTION.USERS)
  const q = query(servicesRef, where('email', '==', userEmail))
  const servicesSnapshot = await getDocs(q)
  let users: { email: string }[] = []

  servicesSnapshot.forEach(doc => {
    users.push({
      email: doc.get('email'),
    })
  })

  return Boolean(users.length)
}

const deleteUserFromStorage = async (): Promise<void> => {
  const userFromLocalStorage: string | null =
    (await window.localStorage.getItem(LOCAL_STORAGE_KEY)) || null

  if (userFromLocalStorage) {
    await window.localStorage.removeItem(LOCAL_STORAGE_KEY)
  }
  return
}

export { getUser, checkUserForAdminRights, deleteUserFromStorage }

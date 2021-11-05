import { COLLECTION } from 'CONFIG'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from 'services/firebase'

const getAllServices = async () => {
  const servicesRef = collection(firestore, COLLECTION.SERVICES)

  const servicesSnapshot = await getDocs(servicesRef)
  servicesSnapshot.forEach(doc => {
    console.log(doc.id, ' => ', doc.data())
  })
}

export { getAllServices }

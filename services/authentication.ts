import { googleAuth, googleAuthProvider, signInWithPopup } from 'services/firebase'
import { User, checkUserForAdminRights } from 'services/user'

const signInWithGoogle = async () => {
  const result = await signInWithPopup(googleAuth, googleAuthProvider)
  const id: string = result.user.uid
  const email: string = result.user?.email || ''
  const avatar: string = result.user?.photoURL || ''
  const fullName: string = result.user?.displayName || ''
  const isAdmin: boolean = await checkUserForAdminRights(email)

  const preparedUser: User = { id, avatar, email, fullName, isAdmin }

  await window.localStorage.setItem('user', JSON.stringify(preparedUser))

  return preparedUser
}

export { signInWithGoogle }

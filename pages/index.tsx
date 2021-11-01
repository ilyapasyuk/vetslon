import type { NextPage } from 'next'

import { ContactsNotice } from 'Components/ContactsNotice'
import { Layout } from 'Components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="СЛОН">
      <ContactsNotice />
    </Layout>
  )
}

export default Home

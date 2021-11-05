import type { NextPageContext } from 'next'

import { IGlobalInfo } from 'services/clinic'

import { ContactsNotice } from 'Components/ContactsNotice'
import { Layout } from 'Components/Layout'

interface HomeProps {
  globalInfo: IGlobalInfo
}

const Home = ({ globalInfo }: HomeProps) => {
  return (
    <Layout title="СЛОН">
      <ContactsNotice
        phoneNumber={globalInfo.phoneNumber}
        appName={globalInfo.appName}
        email={globalInfo.email}
        slogan={globalInfo.slogan}
      />
    </Layout>
  )
}

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {
      globalInfo: {},
    },
  }
}

export default Home

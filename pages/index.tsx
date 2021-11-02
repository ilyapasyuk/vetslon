import { CONFIG } from 'CONFIG'
import type { NextPageContext } from 'next'

import { getDatabase, IGlobalInfo } from 'services/notion'

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
  const serverData = await getDatabase(CONFIG.globalInfoDatabaseId)

  return {
    props: {
      globalInfo: serverData,
    },
  }
}

export default Home

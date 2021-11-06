import type { NextPageContext } from 'next'

import { IGlobalInfo } from 'services/clinic'

import { Layout } from 'Components/Layout'

interface HomeProps {
  globalInfo: IGlobalInfo
}

const Home = ({ globalInfo }: HomeProps) => {
  return <Layout title="СЛОН">123</Layout>
}

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {
      globalInfo: {},
    },
  }
}

export default Home

import type { NextPageContext } from 'next'

import { IGlobalInfo } from 'services/clinic'

import { LayoutForClients } from 'Components/LayoutForClients'

interface HomeProps {
  globalInfo: IGlobalInfo
}

const Home = ({ globalInfo }: HomeProps) => {
  return <LayoutForClients title="СЛОН">123</LayoutForClients>
}

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {
      globalInfo: {},
    },
  }
}

export default Home

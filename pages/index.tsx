import type { NextPageContext } from 'next'

import { IGlobalInfo } from 'services/clinic'

import { HomePage } from 'Containers/HomePage'

interface HomeProps {
  globalInfo: IGlobalInfo
}

const Home = ({ globalInfo }: HomeProps) => {
  return <HomePage />
}

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {
      globalInfo: {},
    },
  }
}

export default Home

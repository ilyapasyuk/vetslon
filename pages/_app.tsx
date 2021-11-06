import type { AppProps } from 'next/app'

import { StoreProvider } from 'Contexts/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp

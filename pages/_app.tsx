import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { VET_SLON } from 'theme'

import { StoreProvider } from 'Contexts/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={VET_SLON}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </ThemeProvider>
  )
}

export default MyApp

import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'

import { Header } from '../components/Header'

import { theme } from '../styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Header />
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

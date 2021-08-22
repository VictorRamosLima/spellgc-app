import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { Cart } from '../components/Cart'
import { Container } from '../components/Container'

export default function Home() {
  return (
    <Container>
      <Box
        as="form"
        flex="1"
        borderRadius={8}
        bg="gray.800"
        p={['6', '8']}
        minWidth="360px"
        maxWidth="1300px"
        mx="auto"
      >
        <Cart />
      </Box>
    </Container>
  )
}

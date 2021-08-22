import { Flex } from '@chakra-ui/react'
import React from 'react'

import { Sidebar } from './Sidebar'

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <Flex justify="center" maxWidth="1300px" mx="auto">
      <Sidebar />
      {children}
    </Flex>
  )
}

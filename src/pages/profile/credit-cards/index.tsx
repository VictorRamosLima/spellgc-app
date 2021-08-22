import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Th,
  Thead,
  Tr,
  Tbody,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { RiAddLine } from 'react-icons/ri'

import { Pagination } from '../../../components/Pagination'
import { CreditCardRow } from '../../../components/CreditCards/CreditCardRow'

import { ProfileSidebarNav } from '../../../components/ProfileSidebarNav'

export default function CreditCards() {
  const [page, setPage] = useState(1)

  return (
    <Flex justify="space-between" maxWidth="1480px" mx="auto">
      <ProfileSidebarNav />
      <Flex w="100%" my="6" maxWidth="1000px" mx="auto" px={['4', '4', '6']}>
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading side="lg" fontWeight="normal">Cartões de crédito</Heading>

            <Link href="/profile/credit-cards/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Número</Th>
                <Th>CVV</Th>
                <Th>Bandeira</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              <CreditCardRow
                cvv="082"
                number="8790654809670435"
                flag="American Express"
              />
              <CreditCardRow
                cvv="881"
                number="1625789635627898"
                flag="Visa"
              />
              <CreditCardRow
                cvv="812"
                number="7829346578903215"
                flag="Elo"
              />
            </Tbody>
          </Table>

          <Pagination
            totalCountOfRegisters={20}
            currentPage={page}
            onPageChange={setPage}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

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
import { AddressRow } from '../../../components/Addresses/AddressRow'

import { ProfileSidebarNav } from '../../../components/ProfileSidebarNav'

export default function Addresses() {
  const [page, setPage] = useState(1)

  return (
    <Flex justify="space-between" maxWidth="1480px" mx="auto">
      <ProfileSidebarNav />
      <Flex w="100%" my="6" maxWidth="1000px" mx="auto" px={['4', '4', '6']}>
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading side="lg" fontWeight="normal">Endereços</Heading>

            <Link href="/profile/addresses/create" passHref>
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
                <Th>Rua</Th>
                <Th>CEP</Th>
                <Th>Número</Th>
                <Th>Tipo</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              <AddressRow
                publicPlace="Rua Limoeiros"
                zipCode="08588120"
                number={56}
                type="Entrega"
              />
              <AddressRow
                publicPlace="Rua Laranjeiras"
                zipCode="08588120"
                number={83}
                type="Entrega"
              />
              <AddressRow
                publicPlace="Estrada dos Índios"
                zipCode="08588120"
                number={78}
                type="Cobrança"
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

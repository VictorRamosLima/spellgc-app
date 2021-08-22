import { Tr, Td, Text, Link, Button, Icon } from '@chakra-ui/react'
import { AiOutlineDelete } from 'react-icons/ai'

interface AddressRowProps {
  publicPlace: string
  zipCode: string
  number: number
  type: string
}

export const AddressRow = ({publicPlace, zipCode, number, type }: AddressRowProps) => {
  return (
    <Tr>
      <Td>
        <Link color="purple.400">
          <Text fontWeight="bold">{publicPlace}</Text>
        </Link>
      </Td>
      <Td>
        <Text fontSize="sm" color="gray.300">
          {zipCode}
        </Text>
      </Td>
      <Td>
        <Text fontSize="sm" color="gray.300">
          {number}
        </Text>
      </Td>
      <Td>
        <Text fontSize="sm" color="gray.300">
          {type}
        </Text>
      </Td>
      <Td>
      <Button
        size="sm"
        fontSize="sm"
        colorScheme="pink"
        leftIcon={<Icon as={AiOutlineDelete} fontSize="20" />}
      >
        Excluir
      </Button>
      </Td>
    </Tr>
  )
}

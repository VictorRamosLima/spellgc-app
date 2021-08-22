import { Tr, Td, Text, Link, Button, Icon } from '@chakra-ui/react'
import { AiOutlineDelete } from 'react-icons/ai'

interface AddressRowProps {
  cvv: string
  flag: string
  number: string
}

export const CreditCardRow = ({ cvv, flag, number }: AddressRowProps) => {
  return (
    <Tr>
      <Td>
        <Link color="purple.400">
          <Text fontWeight="bold">{number}</Text>
        </Link>
      </Td>
      <Td>
        <Text fontSize="sm" color="gray.300">
          {cvv}
        </Text>
      </Td>
      <Td>
        <Text fontSize="sm" color="gray.300">
          {flag}
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

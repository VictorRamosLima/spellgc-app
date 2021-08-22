import { Box, Icon, Badge } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'

export const CartNav = (): JSX.Element => {
  return (
    <Box position="relative">
      <Icon as={FiShoppingCart} fontSize={36} color="pink.500" />
      <Badge color="pink.500" bgColor="white" position="absolute" bottom="0">2</Badge>
    </Box>
  )
}

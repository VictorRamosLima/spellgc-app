import { MdAddShoppingCart } from 'react-icons/md'
import { Box, Button, Image, Icon, Text, As } from '@chakra-ui/react'

import { formatPrice } from '../../utils/format'

interface CartItemProps {
  image: string
  title: string
  price: number
  asProperty?: As
}

export const CartItem = ({ image, title, price, asProperty = 'li' }: CartItemProps): JSX.Element => {
  const formatedPrice = formatPrice(price)

  return (
    <Box
      display="flex"
      flexDirection="column"
      bgColor="gray.950"
      borderRadius="4px"
      p="20px"
      as={asProperty}
    >
      <Image mx="auto" maxWidth="250px" src={image} alt={title} borderRadius="4px" />

      <Text fontSize="16px" lineHeight="20px" color="gray.300" mt="5px" as="strong">
        {title}
      </Text>

      <Text fontSize="21px" fontWeight="bold" m="5px 0 20px" as="span">
        {formatedPrice}
      </Text>

      <Button
        overflow="hidden"
        type="submit"
        size="lg"
        mt="6"
        colorScheme="pink"
        _hover={{ bg: 'pink.600' }}
        display="flex"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" padding="12px">
          <Icon as={MdAddShoppingCart} size={16} color="whiteAlpha" mr="5px" />
        </Box>
        <Text flex="1" textAlign="center" fontWeight="bold" as="span">Adicionar ao carrinho</Text>
      </Button>
    </Box>
  )
}

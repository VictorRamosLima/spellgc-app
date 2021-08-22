import { Text, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'

export const Logo = (): JSX.Element => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Link href="/" passHref>
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        align={isWideVersion ? 'left' : 'center'}
        cursor="pointer"
      >
        spellgc<Text as="span" ml="1" color="pink.500">.</Text>
      </Text>
    </Link>
  )
}

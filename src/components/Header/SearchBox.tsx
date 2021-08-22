import { Flex, Icon, Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { useRouter } from 'next/router'

export const SearchBox = (): JSX.Element => {
  const { asPath } = useRouter()

  const [search, setSearch] = useState('')
  const [isInitialPage, setIsInitialPage] = useState(false)

  useEffect(() => {
    setIsInitialPage(asPath === '/')
  }, [asPath])

  if (!isInitialPage) return <></>

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth="400px"
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
        onChange={event => setSearch(event.target.value)}
        value={search}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}

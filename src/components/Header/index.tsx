import { Box, Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { SearchBox } from './SearchBox'
import { Logo } from './Logo'
import { CartNav } from './CartNav'

export const Header = (): JSX.Element => {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1300px"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justify="space-between"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      { isWideVersion && <SearchBox /> }

      <Box><CartNav /></Box>
    </Flex>
  )
}

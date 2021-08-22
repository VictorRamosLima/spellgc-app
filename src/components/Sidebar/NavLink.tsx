import { Link as ChakraLink, Text, Icon, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { ElementType } from 'react'

import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  icon?: ElementType
  children: string
}

export const NavLink = ({ icon = null, children, href, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        { !!icon && <Icon as={icon} /> }
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}

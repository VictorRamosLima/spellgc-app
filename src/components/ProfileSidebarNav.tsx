import { Stack } from '@chakra-ui/react'

import { NavLink } from './Sidebar/NavLink'

export const ProfileSidebarNav = () => {
  return (
    <Stack spacing="4" align="flex-start">
      <NavLink href="/profile/personal-data">Informações pessoais</NavLink>
      <NavLink href="/profile/update-password">Atualizar senha</NavLink>
      <NavLink href="/profile/addresses">Endereços</NavLink>
      <NavLink href="/profile/credit-cards">Cartões de crédito</NavLink>
    </Stack>
  )
}

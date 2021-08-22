import { Stack } from '@chakra-ui/react'

import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="YUGIOH">
        <NavLink href="#">Black Magician</NavLink>
        <NavLink href="#">Clash of Rebellions</NavLink>
        <NavLink href="#">Estelar Vrains</NavLink>
      </NavSection>

      <NavSection title="VANGUARD">
        <NavLink href="#">Overdress</NavLink>
        <NavLink href="#">Genesis of the five greats</NavLink>
      </NavSection>

      <NavSection title="POKÉMON">
        <NavLink href="#">Sword and Shield</NavLink>
        <NavLink href="#">Sword and Shield II</NavLink>
      </NavSection>

      <NavSection title="MAGIC">
        <NavLink href="#">Eldraine&#39;s Throne</NavLink>
        <NavLink href="#">Wizards of the Coast</NavLink>
      </NavSection>
    </Stack>
  )
}

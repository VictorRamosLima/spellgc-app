import { Stack, Box, Text } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

const generatePagesArray = (from: number, to: number) =>
  [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0)

export const Pagination = ({
  registersPerPage = 10,
  totalCountOfRegisters,
  currentPage = 1,
  onPageChange,
}: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - siblingsCount - 1, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > (siblingsCount + 1) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (siblingsCount + 2) && (
              <Text color="gray.300" width="6" textAlign="center">...</Text>
            )}
          </>
        )}

        {previousPages.map(page =>
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        )}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.map(page =>
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        )}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + siblingsCount + 1) < lastPage && (
              <Text color="gray.300" width="6" textAlign="center">...</Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}

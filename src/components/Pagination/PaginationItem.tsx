import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export const PaginationItem = ({
  number,
  isCurrent = false,
  onPageChange,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'dsefault,'
        }}
      >
        {number}
      </Button>
    )
  }

  return (
  <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}

import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react'

import { Option } from './Option'

interface SelectProps extends ChakraSelectProps {
  name: string
  label?: string
  error?: FieldError
}

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, error = null, placeholder = 'Selecione', ...rest },
  ref
): JSX.Element => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraSelect
        name={name}
        id={name}
        colorScheme="whiteAlpha"
        border="none"
        bgColor="gray.900"
        size="lg"
        focusBorderColor="pink.500"
        ref={ref}
        {...rest}
      >
        { !!placeholder && <Option key={placeholder} label={placeholder} value={placeholder} /> }
        {rest.children}
      </ChakraSelect>

      { !!error && <FormErrorMessage>{error.message}</FormErrorMessage> }
    </FormControl>
  )
}

const SelectWithFowardedRef = forwardRef(Select)

export {SelectWithFowardedRef as Select}

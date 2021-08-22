import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
): JSX.Element => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{ bgColor: 'gray.900' }}
        {...rest}
        ref={ref}
      />

      { !!error && <FormErrorMessage>{error.message}</FormErrorMessage> }
    </FormControl>
  )
}

const InputWithFowardedRef = forwardRef(Input)

export {InputWithFowardedRef as Input}

import {
  RadioGroup,
  RadioGroupProps,
  Stack,
  StackDirection,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction, useState, ReactNode } from 'react'
import { Controller } from 'react-hook-form'

interface RadioProps extends RadioGroupProps {
  direction?: StackDirection
  label?: string
  error?: string
}

const Radio: ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (
  {label = null, direction = 'row', children, error = null, ...rest},
  ref
): JSX.Element => {
  return (
    <FormControl isInvalid={!!error}>
      <RadioGroup {...rest}>
        { !!label && <FormLabel htmlFor={rest.name} mb="20px">{label}</FormLabel> }

        <Stack ref={ref} direction={direction}>
          {children}
        </Stack>
      </RadioGroup>

      { !!error && <FormErrorMessage>{error}</FormErrorMessage> }
    </FormControl>
  )
}

const RadioWithRef = forwardRef(Radio)

export {RadioWithRef as Radio}

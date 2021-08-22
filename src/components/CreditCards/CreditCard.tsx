import React from 'react'
import { Heading, Divider, SimpleGrid } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { Input } from '../Form/Input'
import { Select } from '../Form/Select'
import { Option } from '../Form/Option'

import { flags } from '../../utils'

interface CreditCardProps {
  name?: string
  heading: string
}

export const CreditCard = ({ heading, name = null }: CreditCardProps): JSX.Element => {
  const { register, formState: { errors } } = useFormContext()
  const formattedName = name ? `${name}.` : ''
  const formattedErrors = name ? errors[name] : errors

  return (
    <>
      {!!heading && (
        <>
          <Divider my="6" borderColor="gray.700" />
          <Heading size="lg" fontWeight="normal" alignSelf="baseline">{heading}</Heading>
        </>
      )}

      <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
        <Input
          {...register(`${formattedName}number`)}
          error={formattedErrors?.number}
          name={`${formattedName}number`}
          type="number"
          label="Número do cartão"
        />

        <Input
          {...register(`${formattedName}name`)}
          error={formattedErrors?.name}
          name={`${formattedName}name`}
          type="text"
          label="Nome impresso no cartão"
          max="16"
        />
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
        <Select
          {...register(`${formattedName}flag`)}
          error={formattedErrors?.flag}
          name={`${formattedName}flag`}
          label="Bandeira do cartão"
        >
          {Object.entries(flags).map(([value, label]) => (
            <Option key={value} label={label} value={value} />
          ))}
        </Select>

        <Input
          {...register(`${formattedName}cvv`)}
          error={formattedErrors?.cvv}
          name={`${formattedName}cvv`}
          type="number"
          label="CVV"
        />
      </SimpleGrid>
    </>
  )
}

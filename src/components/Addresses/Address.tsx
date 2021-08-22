import React from 'react'
import { Heading, Divider, SimpleGrid } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { Input } from '../Form/Input'
import { Select } from '../Form/Select'
import { Option } from '../Form/Option'

import { states, publicPlaceTypes, homeTypes, countries } from '../../utils'

interface AddressProps {
  name?: string
  heading: string
}

export const Address = ({ heading, name = null }: AddressProps): JSX.Element => {
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

      <Input
        {...register(`${formattedName}publicPlace`)}
        error={formattedErrors?.publicPlace}
        name={`${formattedName}publicPlace`}
        type="text"
        label="Logradouro"
      />

      <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
        <Select
          {...register(`${formattedName}publicPlaceType`)}
          error={formattedErrors?.publicPlaceType}
          name={`${formattedName}publicPlaceType`}
          label="Tipo de logradouro"
        >
          {Object.entries(publicPlaceTypes).map(([value, label]) => (
            <Option key={value} label={label} value={value} />
          ))}
        </Select>

        <Select
          {...register(`${formattedName}homeType`)}
          error={formattedErrors?.homeType}
          name={`${formattedName}homeType`}
          label="Tipo de residência"
        >
          {Object.entries(homeTypes).map(([value, label]) => (
            <Option key={value} label={label} value={value} />
          ))}
        </Select>

        <Input
          {...register(`${formattedName}complement`)}
          name={`${formattedName}complement`}
          type="text"
          label="Complemento"
        />
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
        <Input
          {...register(`${formattedName}number`)}
          error={formattedErrors?.number}
          name={`${formattedName}number`}
          type="number"
          label="Número"
          w="100%"
        />

        <Input
          {...register(`${formattedName}neighborhood`)}
          error={formattedErrors?.neighborhood}
          name={`${formattedName}neighborhood`}
          type="text"
          label="Bairro"
          w="100%"
        />

        <Input
          {...register(`${formattedName}zipCode`)}
          error={formattedErrors?.zipCode}
          name={`${formattedName}zipCode`}
          type="text"
          label="CEP"
          w="100%"
        />
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
        <Input
          {...register(`${formattedName}city`)}
          error={formattedErrors?.city}
          name={`${formattedName}city`}
          type="text"
          label="Cidade"
        />

        <Select
          {...register(`${formattedName}state`)}
          error={formattedErrors?.state}
          name={`${formattedName}state`}
          label="Estado"
        >
          {Object.entries(states).map(([value, label]) => (
            <Option key={value} label={label} value={value} />
          ))}
        </Select>

        <Select
          {...register(`${formattedName}country`)}
          error={formattedErrors?.country}
          name={`${formattedName}country`}
          label="País"
        >
          {countries.map(country => (
            <Option key={country} label={country} value={country} />
          ))}
        </Select>
      </SimpleGrid>
    </>
  )
}

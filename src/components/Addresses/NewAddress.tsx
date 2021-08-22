import React from 'react'
import { Heading, Divider, SimpleGrid } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { Input } from '../Form/Input'
import { Select } from '../Form/Select'
import { Option } from '../Form/Option'

import { states, publicPlaceTypes, homeTypes, countries } from '../../utils'

interface AddressData {
  publicPlace: string
  publicPlaceType: string
  homeType: string
  zipCode: string
  number: number
  complement: string
  neighborhood: string
  city: string
  country: string
  state: string
}

interface AddressProps {
  address?: AddressData
}

export const Address = ({ address = null }: AddressProps): JSX.Element => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <>
      <Input
        {...register('publicPlace')}
        error={errors.publicPlace}
        name="publicPlace"
        type="text"
        label="Logradouro"
        defaultValue={address?.publicPlaceType}
      />

      <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
        <Select
          {...register('publicPlaceType')}
          error={errors.publicPlaceType}
          name="publicPlaceType"
          label="Tipo de logradouro"
          defaultValue={address?.publicPlaceType}
        >
          {Object.entries(publicPlaceTypes).map(([value, label]) => (
            <Option key={value} label={label} value={value} />
          ))}
        </Select>

        <Select
          {...register('homeType')}
          error={errors.homeType}
          name="homeType"
          label="Tipo de residência"
          defaultValue={address?.homeType}
        >
          {Object.entries(homeTypes).map(([value, label]) => (
            <Option key={value} label={label} value={value} />
          ))}
        </Select>

        <Input
          {...register('complement')}
          name="complement"
          type="text"
          label="Complemento"
          defaultValue={address?.complement}
        />
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
        <Input
          {...register('number')}
          error={errors.number}
          name="number"
          type="number"
          label="Número"
          w="100%"
          defaultValue={address?.number}
        />

        <Input
          {...register('neighborhood')}
          error={errors.neighborhood}
          name="neighborhood"
          type="text"
          label="Bairro"
          w="100%"
          defaultValue={address?.neighborhood}
        />

        <Input
          {...register('zipCode')}
          error={errors.zipCode}
          name="zipCode"
          type="text"
          label="CEP"
          w="100%"
          defaultValue={address?.zipCode}
        />
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
        <Input
          {...register('city')}
          error={errors.city}
          name="city"
          type="text"
          label="Cidade"
          defaultValue={address?.city}
        />

        <Select
          {...register('state')}
          error={errors.state}
          name="state"
          label="Estado"
          defaultValue={address?.state}
        >
          {Object.entries(states).map(([value, label]) => (
            <Option key={value} label={label} value={value} />
          ))}
        </Select>

        <Select
          {...register('country')}
          error={errors.country}
          name="country"
          label="País"
          defaultValue={address?.country}
        >
          {countries.map(country => (
            <Option key={country} label={country} value={country} />
          ))}
        </Select>
      </SimpleGrid>
    </>
  )
}

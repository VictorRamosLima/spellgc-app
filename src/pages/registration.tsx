import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import {
  Box,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'

import { Input } from '../components/Form/Input'
import { Select } from '../components/Form/Select'
import { Option } from '../components/Form/Option'
import { Address } from '../components/Addresses/Address'

import { registrationSchema } from '../schemas'

import { genders, telephoneTypes } from '../utils'
import { CreditCard } from '../components/CreditCards/CreditCard'

interface AddressFormData {
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

interface RegistrationFormData {
  name: string
  gender: string
  birthdate: string
  email: string
  cpf: string
  ddd: string
  telephoneType: string
  telephone: string
  password: string
  passwordConfirmation: string
  billingAddress: AddressFormData
  shippingAddress: AddressFormData
}

export default function Registration() {
  const methods = useForm({ resolver: yupResolver(registrationSchema) })
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods

  const handleRegistration: SubmitHandler<RegistrationFormData> = (data, event) => {
    event.preventDefault()

    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <Box
        as="form"
        flex="1"
        borderRadius={8}
        bg="gray.800"
        p={['6', '8']}
        minWidth="360px"
        maxWidth="920px"
        mx="auto"
        onSubmit={handleSubmit(handleRegistration)}
      >
        <Heading size="lg" fontWeight="normal">Cadastro</Heading>

        <Divider my="6" borderColor="gray.700" />

        <VStack spacing="8">
          <Input
            {...register('name')}
            error={errors.name}
            name="name"
            label="Nome completo"
          />

          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Select
              {...register('gender')}
              error={errors.gender}
              name="gender"
              label="Gênero"
            >
              {Object.entries(genders).map(([value, label]) => (
                <Option key={value} label={label} value={value} />
              ))}
            </Select>

            <Input
              {...register('birthdate')}
              error={errors.birthdate}
              name="birthdate"
              type="date"
              label="Data de nascimento"
            />

            <Input
              {...register('cpf')}
              error={errors.cpf}
              name="cpf"
              type="text"
              label="CPF"
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Select
              {...register('telephoneType')}
              error={errors.telephoneType}
              name="telephoneType"
              label="Tipo de telefone"
            >
              {Object.entries(telephoneTypes).map(([value, label]) => (
                <Option key={value} label={label} value={value} />
              ))}
            </Select>

            <Input
              {...register('ddd')}
              error={errors.ddd}
              name="ddd"
              type="number"
              label="DDD"
            />

            <Input
              {...register('telephone')}
              error={errors.telephone}
              name="telephone"
              type="number"
              label="Telefone"
            />
          </SimpleGrid>

          <Input
            {...register('email')}
            error={errors.email}
            minWidth="240px"
            name="email"
            type="email"
            label="E-mail"
          />

          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              {...register('password')}
              error={errors.password}
              name="password"
              type="password"
              label="Senha"
            />

            <Input
              {...register('passwordConfirmation')}
              error={errors.passwordConfirmation}
              name="passwordConfirmation"
              type="password"
              label="Confirmação de senha"
            />
          </SimpleGrid>

          <Address name="billingAddress" heading="Endereço de entrega" />

          <Address name="shippingAddress" heading="Endereço de cobrança" />

          <CreditCard name="creditCard" heading="Cartão de crédito" />

          <Button
            size="lg"
            isLoading={isSubmitting}
            type="submit"
            colorScheme="pink"
          >
            Enviar
          </Button>
        </VStack>
      </Box>
    </FormProvider>
  )
}

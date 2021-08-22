import { Flex, Box, Heading, Divider, VStack, SimpleGrid, Button } from '@chakra-ui/react'

import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

import { updateSchema } from '../../../schemas'

import { genders, telephoneTypes } from '../../../utils'

import { ProfileSidebarNav } from '../../../components/ProfileSidebarNav'
import { Input } from '../../../components/Form/Input'
import { Select } from '../../../components/Form/Select'
import { Option } from '../../../components/Form/Option'

interface PersonalDataForm {
  name: string
  gender: string
  birthdate: string
  email: string
  cpf: string
  ddd: string
  telephoneType: string
  telephone: string
}

export default function PersonalData() {
  const methods = useForm({ resolver: yupResolver(updateSchema) })
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods

  const handleUpdate: SubmitHandler<PersonalDataForm> = (data, event) => {
    event.preventDefault()

    console.log(data)
  }

  return (
    <Flex justify="space-between" maxWidth="1480px" mx="auto">
      <ProfileSidebarNav />

      <Box
        as="form"
        flex="1"
        borderRadius={8}
        bg="gray.800"
        p={['6', '8']}
        minWidth="360px"
        maxWidth="1000px"
        mx="auto"
        onSubmit={handleSubmit(handleUpdate)}
      >
        <Heading size="lg" fontWeight="normal">Dados pessoais</Heading>

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
            name="email"
            type="email"
            label="E-mail"
          />

          <Button
            size="lg"
            isLoading={isSubmitting}
            type="submit"
            colorScheme="pink"
          >
            Salvar
          </Button>
        </VStack>
      </Box>
    </Flex>
  )
}

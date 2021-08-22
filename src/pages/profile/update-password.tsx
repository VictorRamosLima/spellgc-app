import { Flex, Box, Heading, Divider, VStack, SimpleGrid, Button } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ProfileSidebarNav } from '../../components/ProfileSidebarNav'
import { Input } from '../../components/Form/Input'

import { updatePasswordSchema } from '../../schemas'

interface PasswordForm {
  password: string
  newPassword: string
  newPasswordConfirmation: string
}

export default function PersonalData() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(updatePasswordSchema) })

  const handleUpdate: SubmitHandler<PasswordForm> = (data, event) => {
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
        <Heading size="lg" fontWeight="normal">Atualizar senha</Heading>

        <Divider my="6" borderColor="gray.700" />

        <VStack spacing="8">
          <Input
            {...register('password')}
            error={errors.password}
            minWidth="240px"
            name="password"
            type="password"
            label="Senha atual"
          />

          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              {...register('newPassword')}
              error={errors.newPassword}
              name="newPassword"
              type="password"
              label="Nova senha"
            />

            <Input
              {...register('newPasswordConfirmation')}
              error={errors.newPasswordConfirmation}
              name="newPasswordConfirmation"
              type="password"
              label="Confirmação de senha"
            />
          </SimpleGrid>

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

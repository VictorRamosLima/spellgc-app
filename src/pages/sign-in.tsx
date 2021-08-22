import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'

interface SignInFormData {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(signInFormSchema) })

  const handleSignIn: SubmitHandler<SignInFormData> = ({ email, password }, event) => {
    event.preventDefault()
  }

  return (
    <Flex align="center" mt="240px" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth="360px"
        bg="gray.800"
        p="8"
        borderRadius="8px"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            {...register('email')}
            error={errors.email}
            type="email"
            name="email"
            label="E-mail"
          />
          <Input
            {...register('password')}
            error={errors.password}
            type="password"
            name="password"
            label="Senha"
          />
        </Stack>

        <Button
          type="submit"
          size="lg"
          mt="6"
          colorScheme="pink"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

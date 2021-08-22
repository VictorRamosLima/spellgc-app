import * as yup from 'yup'

const phoneRegExp = /^\d{4,5}-?\d{4}$/
const dddRegExp = /^\d{2}$/
const cpfRegExp = /^\d{3}[\w\-._]?\d{3}[\w\-._]?\d{3}[\w\-._]?\d{2}$/
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

import { genders, telephoneTypes } from '../utils'

export const updatePasswordSchema = yup.object().shape({
  password: yup.string().required('Senha é obrigatória'),
  newPassword: yup
    .string()
    .test('len', 'Senha deve conter 8 ou mais caracteres', val => val.length >= 5)
    .matches(
      passwordRegExp,
      'Senha deve ter letras maiúsculas, minúsculas e ao menos um caractere especial'
    )
    .required('Senha é obrigatória'),
  newPasswordConfirmation: yup
    .string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([yup.ref('newPassword')], 'Senhas devem ser iguais'),
})

export const updateSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  gender: yup.string().oneOf(Object.keys(genders), 'Gênero é obrigatório'),
  birthdate: yup
    .string()
    .required('Data de nascimento é obrigatória')
    .test(
      'birthdate',
      'Deve ter 18 anos ou mais',
      value => Math.floor((new Date().getTime() - new Date(value).getTime()) / (365.25 * 24 * 60 * 60 * 1000)) >= 18
    ),
  email: yup.string().required('E-mail é obrigatório').email('E-mail é inválido'),
  cpf: yup.string().required('CPF é obrigatório').matches(cpfRegExp, 'CPF é inválido'),
  ddd: yup.string().required('DDD é obrigatório').matches(dddRegExp, 'DDD é inválido'),
  telephoneType: yup
    .string()
    .oneOf(Object.keys(telephoneTypes), 'Tipo de telefone é obrigatório'),
  telephone: yup
    .string()
    .required('Telefone é obrigatório')
    .matches(phoneRegExp, 'Telefone é inválido'),
})


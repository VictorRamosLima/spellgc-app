import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'

import { api } from '../api'

type User = {
  name: string
  gender: string
  birthDate: string
  cpf: string
  phone: string
  email: string
  createdAt: Date
  updatedAt: Date
}

type GetUserResponse = {
  user: User
}

export const findUserById = async (userId: number): Promise<GetUserResponse> => {
  const { data: { user } } = await api.get(`/users/${userId}`)
  return user
}

export const useFindUser = (userId: number, options: UseQueryOptions) => {
  return useQuery(['user', userId], () => findUserById(userId), {
    staleTime: 1000 * 60 * 10,
    ...options,
  })
}

import { createServer, Model, ActiveModelSerializer } from 'miragejs'

type User = {
  name: string
  gender: 'MALE' | 'FEMALE'
  birthDate: string
  cpf: string
  phone: string
  email: string
  password: string
  passwordConfirmation: string
  createdAt: string
  updatedAt: string
}

export function createMirageServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users/:id')
      this.post('/users')

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}

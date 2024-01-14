export type User = {
  nome?: string
  sobrenome?: string
  email: string
  senha: string
  dataNascimento?: string
  sexo?: string
  CPF?: string
  CEP?: string
  logradouro?: string
  bairro?: string
  complemento?: string
  cidade?: string
  estado?: string
}

export type UserContextType = {
  image: string
  token: string
  user: User
  nome?: string
  sobrenome?: string
  email: string
  senha: string
  dataNascimento?: string
  sexo?: string
  CPF?: string
  CEP?: string
  logradouro?: string
  bairro?: string
  complemento?: string
  cidade?: string
  estado?: string
  signIn: (UserContextType) => void
  signOut: () => void
  signed?: boolean
}

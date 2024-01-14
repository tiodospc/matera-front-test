import { Button, Container } from 'react-bootstrap'
import GenericCard from '../../components/common/Card/GenericCard'
import InputText from '../../components/common/InputText/inputText'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import fetchAddressByCep, { register } from '../../service/api'
import validarCPF from '../../helpers/validarCPF'
import { useNavigate } from 'react-router-dom'
import { User } from '../../types/types'

type AdressParam = {
  cep: string
  localidade: string
  uf: string
  logradouro: string
  bairro: string
  complemento: string
}

interface RegisterUser extends User {}

const Register = () => {
  const navigate = useNavigate()

  const [validated, setValidated] = useState(false)
  const [validCPF, setValidCPF] = useState<string>('')
  const [cep, setCep] = useState<string>('')

  const [addressData, setAddressData] = useState<AdressParam>({
    cep: '',
    localidade: '',
    uf: '',
    logradouro: '',
    bairro: '',
    complemento: ''
  })

  const [dataUser, setDataUser] = useState<RegisterUser>({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    dataNascimento: '',
    sexo: '',
    CPF: '',
    CEP: '',
    logradouro: '',
    bairro: '',
    complemento: '',
    cidade: '',
    estado: ''
  })

  const handleSubmit = async (e: any) => {
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    if (validCPF === '') {
      alert('CPF invalido')
      e.preventDefault()
      e.stopPropagation()
    } else {
      dataUser.CPF = validCPF
    }

    setValidated(true)
    setDataUser({
      ...dataUser,
      logradouro: addressData.logradouro,
      bairro: addressData.bairro,
      complemento: addressData.complemento,
      cidade: addressData.localidade,
      estado: addressData.uf
    })

    handleRegister(dataUser)
  }

  const handleRegister = async (dataUser: RegisterUser) => {
    await register(dataUser)
      .then(response => {
        console.log(response)
        navigate('/')
      })
      .catch(error => {
        console.log(error)
        alert('API MOCKADA')
        navigate('/')
      })
  }

  const handleCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cpf = e.target.value
    if (cpf.length === 11 && validarCPF(cpf)) {
      setValidCPF(cpf)
      alert('CPF valido')
    } else {
      setValidCPF('')
    }
  }

  const handleCep = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target?.value

    if (cep.length === 8) {
      fetchAddressByCep(cep)
      const response = await fetchAddressByCep(cep)
      setAddressData(response)
      setCep(cep)
    }
  }

  return (
    <Container>
      <GenericCard className="m-10">
        <Form noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
          <h1 className="m-10 ml-10 cla">Register</h1>
          <InputText
            className="m-4"
            type="email"
            placeholder="Email"
            label="Digite o email"
            onChange={e => setDataUser({ ...dataUser, email: e.target.value })}
            required
          />

          <InputText
            className="m-4"
            type="password"
            placeholder="senha"
            label="Digite a senha"
            onChange={e => setDataUser({ ...dataUser, senha: e.target.value })}
            required
          />

          <div className="flex flex-row flex-wrap">
            <InputText
              className="m-4"
              type="text"
              placeholder="Nome"
              label="Digite o nome"
              required
              onChange={e => setDataUser({ ...dataUser, nome: e.target.value })}
              feedBack="Campo obrigatório"
            />

            <InputText
              className="m-4"
              type="text"
              placeholder="Sobrenome"
              label="Digite o sobrenome"
              onChange={e => setDataUser({ ...dataUser, sobrenome: e.target.value })}
              required
            />

            <InputText
              className="m-4"
              type="date"
              placeholder="data de nascimentos"
              label="Digite a data de nascimento"
              onChange={e => setDataUser({ ...dataUser, dataNascimento: e.target.value })}
              required
            />

            <InputText
              className="m-4"
              type="number"
              placeholder="CPF"
              label="CPF"
              required
              onChange={e => {
                handleCPF(e)
                setDataUser({ ...dataUser, CPF: e.target.value })
              }}
            />

            <InputText
              className="m-4"
              type="text"
              placeholder="sexo"
              label="Confirme o sexo"
              onChange={e => setDataUser({ ...dataUser, sexo: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-wrap">
            <InputText
              className="m-4"
              type="number"
              placeholder="CEP"
              label="Digite o CEP"
              onChange={e => {
                handleCep(e)
                setDataUser({ ...dataUser, CEP: e.target.value })
              }}
            />
            <InputText
              className="m-4"
              type="text"
              placeholder="Cidade"
              label="Digite a cidade"
              value={addressData.localidade || ''}
            />
            <InputText
              className="m-4"
              type="text"
              placeholder="Estado"
              label="Digite o estado"
              value={addressData.uf || ''}
            />
            <InputText
              className="m-4"
              type="text"
              placeholder="Logradouro"
              label="Digite o logradouro"
              value={addressData.logradouro || ''}
            />
            <InputText
              className="m-4"
              type="text"
              placeholder="Bairro"
              label="Digite o bairro"
              value={addressData.bairro || ''}
            />
            <InputText
              className="m-4"
              type="text"
              placeholder="Complemento"
              label="Digite o complemento"
              onChange={e => setDataUser({ ...dataUser, complemento: e.target.value })}
            />
          </div>

          <div>
            <Button className="m-4" variant="primary" type="submit">
              Cadastrar
            </Button>
            <Button className="m-4" variant="secondary" type="submit">
              Cancelar
            </Button>
          </div>
        </Form>
      </GenericCard>
    </Container>
  )
}

export default Register

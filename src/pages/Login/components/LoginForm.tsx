import { Button, Form } from 'react-bootstrap'
import InputText from '../../../components/common/InputText/inputText'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { fetchDoLogin } from '../../../service/api'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

const LoginForm = () => {
  const navigate = useNavigate()

  const { signIn, signed } = useContext(AuthContext)
  const [validated, setValidated] = useState(false)

  const [dataUser, setDataUser] = useState({
    email: '',
    senha: ''
  })

  const doLogin = async () => {
    console.log(dataUser)
    await signIn(dataUser)
  }

  return (
    <div>
      <Form className="flex flex-col" noValidate validated={validated} onSubmit={e => e}>
        <InputText
          className="m-4"
          type="email"
          placeholder="Email"
          label="Digite o email"
          feedBack="Campo obrigatório"
          required
          onChange={e => setDataUser({ ...dataUser, email: e.target.value })}
        />

        <InputText
          className="m-4"
          type="password"
          placeholder="senha"
          label="Digite a senha"
          feedBack="Campo obrigatório"
          onChange={e => setDataUser({ ...dataUser, senha: e.target.value })}
          required
        />

        <div className="flex flex-row">
          <Button className="m-4" variant="primary" onClick={() => doLogin()}>
            Entrar
          </Button>

          <Button className="m-4" variant="secondary" type="submit" onClick={() => navigate('/register')}>
            Cadastrar
          </Button>
        </div>
      </Form>
    </div>
  )
}
export default LoginForm

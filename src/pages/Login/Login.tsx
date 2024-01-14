import { FormEvent, useCallback, useState } from 'react'
import { Container } from 'react-bootstrap'
import LoginForm from './components/LoginForm'
import GenericCard from '../../components/common/Card/GenericCard'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const { signed } = useContext(AuthContext)
  console.log(signed)
  if (!signed) {
    return (
      <Container className="flex justify-center">
        <GenericCard className="flex flex-col w-[30rem] m-[10rem]">
          <h1 className="text-center">Login</h1>
          <LoginForm />
        </GenericCard>
      </Container>
    )
  } else {
    return <Navigate to="/home" />
  }
}
export default Login

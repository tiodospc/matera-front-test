import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { API_LOGIN } from '../service/constants'
import { UserContextType } from '../types/types'

export const AuthContext = createContext({} as UserContextType)

interface AuthProviderProps {
  children: React.ReactNode
  singOut?: (user: UserContextType) => void
  singIn?: (user: UserContextType) => void
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserContextType>({} as UserContextType)

  useEffect(() => {
    const storagedUser = localStorage.getItem('@Auth:user')
    const storagedToken = localStorage.getItem('@Auth:token')

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser))
      axios.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`
    }
  }, [])

  async function signIn(user: UserContextType) {
    try {
      console.log(user)
      const response = await axios.get(`${API_LOGIN}/user?search=${user.email}`)

      response.data.map((userApi: UserContextType) => {
        if (userApi.senha === user.senha) {
          alert('Login realizado com sucesso!')
          setUser(userApi)

          axios.defaults.headers.common['Authorization'] = `Bearer ${userApi.token}`
          localStorage.setItem('@Auth:user', JSON.stringify(userApi.nome))
          localStorage.setItem('@Auth:image', userApi.image)
          localStorage.setItem('@Auth:token', userApi.token)
        } else {
          alert('Senha incorreta')
        }
      })
    } catch {
      alert('Usuário não encontrado')
    }
  }

  function signOut() {
    localStorage.clear()
  }

  return (
    <AuthContext.Provider
      value={{
        user: user.user,
        email: user.email,
        senha: user.senha,
        token: user.token,
        image: user.image,
        signIn,
        signOut,
        signed: localStorage.getItem('@Auth:token') ? true : false
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}

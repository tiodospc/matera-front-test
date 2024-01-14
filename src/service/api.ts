import axios from 'axios'
import { User } from '../types/types'
import { API_ADDRESS, API_LOGIN } from './constants'

export async function fetchAddressByCep(cep: string) {
  try {
    const response = await axios.get(`${API_ADDRESS}${cep}/json/`)
    return response.data
  } catch (error) {
    throw new Error('Erro ao buscar endereço')
  }
}
export default fetchAddressByCep

export async function register(user: User) {
  try {
    await axios
      .post(`${API_LOGIN}`, {
        user
      })
      .then(() => alert('Usuário cadastrado com sucesso!'))
  } catch (error) {
    throw new Error('Erro ao Registrar Usuário')
  }
}

export async function fetchDoLogin(user: User) {
  try {
    const response = await axios.get(`${API_LOGIN}/user?search=${user.email}`)

    response.data.map((userApi: User) => {
      if (userApi.senha === user.senha) {
        alert('Login realizado com sucesso!')
      } else {
        alert('Senha incorreta')
      }
    })
  } catch {
    alert('Usuário não encontrado')
  }
}

export async function featchGetProducts() {
  try {
    const response = await axios.get(`${API_LOGIN}/produto`)
    return response.data
  } catch {
    throw new Error('Erro ao buscar produtos')
  }
}

export async function featchEspecificProduct(id: string) {
  try {
    const response = await axios.get(`${API_LOGIN}/produto?id=${id}`)
    return response.data
  } catch {
    throw new Error('Erro ao buscar produtos')
  }
}

export async function featchPostProducts(id: string, product: any) {
  try {
    await axios
      .post(`${API_LOGIN}/produto/${id}`, {
        product
      })
      .then(() => alert('Produto cadastrado com sucesso!'))
  } catch (error) {
    throw new Error('Erro ao cadastrar produto')
  }
}

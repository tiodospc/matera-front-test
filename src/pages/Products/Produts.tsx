import { useParams } from 'react-router-dom'
import { featchEspecificProduct } from '../../service/api'
import { useCallback, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

type PageParams = {
  id: string
}

type ProductProps = {
  id: number
  nome: string
  preco: number
  avatar: string
  description: string
  qt_estoque: number
  qt_vendas: number
  marca: string
}

const Product = () => {
  const { id } = useParams<PageParams>()

  const [product, setProducts] = useState<ProductProps[]>([])

  const getProduct = useCallback(async () => {
    const product = await featchEspecificProduct(id || '')
    setProducts(product)
  }, [])

  useEffect(() => {
    getProduct()
  }, [getProduct])

  return (
    <div>
      {product.map(product => {
        return (
          <div className="flex flex-row flex-wrap">
            <Card className="flex flex-col w-[15rem] m-5" key={product.id}>
              <Card.Img variant="top" src={product.avatar} />
              <Card.Body>
                <Card.Title>Nome: {product.nome}</Card.Title>
                <Card.Text>Marca: {product.marca}</Card.Text>
                <Card.Text>Preço: {product.preco}</Card.Text>
                <Card.Text>Estoque: {product.qt_estoque}</Card.Text>
                <Card.Text>Quantidade: {product.qt_vendas}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
export default Product

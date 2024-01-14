import { useCallback, useEffect, useState } from 'react'
import Navs from './components/Navs/Navs'
import { featchGetProducts } from '../../service/api'
import { Button, Card } from 'react-bootstrap'
import ModalAdd from './components/ModalAdd/ModalAdd'
import { Link } from 'react-router-dom'

interface Product {
  marca: string
  id: number
  nome: string
  preco: number
  avatar: string
  qt_estoque: number
  qt_vendas: number
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [show, setShow] = useState(false)

  const getProduct = useCallback(async () => {
    const products = await featchGetProducts()
    setProducts(products.slice(85, 100))
  }, [])

  useEffect(() => {
    getProduct()
  }, [getProduct])

  const handleShow = () => setShow(true)

  return (
    <div className="flex flex-col relative">
      <Navs />
      <ModalAdd show={show} setShow={setShow} />
      <div className="ml-[20rem]">
        <Button variant="primary" className="w-[10rem] mt-5 ml-10" onClick={handleShow}>
          Adicionar Produto
        </Button>

        <div className="flex flex-row flex-wrap">
          {products.map(product => {
            return (
              <Card className="flex flex-col w-[15rem] m-5" key={product.id}>
                {/* Como as imagens nao estao carregando vou colocar uma padrao so para exibicao */}
                <Card.Img variant="top" src={product.avatar} />
                <Card.Body>
                  <Card.Title>{product.nome}</Card.Title>
                  <Card.Text className="flex flex-col">
                    <span>
                      <strong>Marca:</strong>
                      {product.marca}
                    </span>
                    <span>
                      <strong>Preco:</strong>
                      R${product.preco}
                    </span>
                    <span>
                      <strong>Estoque:</strong>
                      {product.qt_estoque}
                    </span>
                    <span>
                      <strong>Vendas:</strong>
                      {product.qt_vendas}
                    </span>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className=" text-center">
                  <Link to={`/home/product/${product.id}`}>Ver mais</Link>
                </Card.Footer>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Home

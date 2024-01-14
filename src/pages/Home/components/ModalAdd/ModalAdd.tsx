import { Modal, Button } from 'react-bootstrap'
import InputText from '../../../../components/common/InputText/inputText'
import { useState } from 'react'
import { featchPostProducts } from '../../../../service/api'

interface ModalAddProps {
  show: boolean
  setShow: (value: boolean) => void
}

const modalADD = ({ show, setShow }: ModalAddProps) => {
  const [productData, setProductData] = useState({
    id: Math.trunc(Math.random() * 200 + 300),
    nome: '',
    marca: '',
    preco: '',
    qt_estoque: '',
    qt_vendas: ''
  })

  const registerProduct = async () => {
    await featchPostProducts(productData.id.toString(), productData)
  }

  return (
    <Modal show={show} onHide={() => setShow(!show)}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar Produto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputText
          className=""
          label="Nome"
          onChange={e => setProductData({ ...productData, nome: e.target.value })}
          type="text"
          placeholder="Nome do produto"
          feedBack="Nome é obrigatório"
          required
        />

        <InputText
          className=""
          label="Marca"
          type="text"
          placeholder="Marca do produto"
          onChange={e => setProductData({ ...productData, marca: e.target.value })}
          feedBack="Marca é obrigatório"
          required
        />

        <InputText
          className=""
          label="Preço"
          onChange={e => setProductData({ ...productData, preco: e.target.value })}
          type="numeric"
          placeholder="Preço do produto"
          feedBack="Preço é obrigatório"
          prefix={'R$: '}
          required
        />

        <InputText
          className=""
          label="Quantidade em estoque"
          onChange={e => setProductData({ ...productData, qt_estoque: e.target.value })}
          type="number"
          placeholder="Quantidade em estoque"
          feedBack="Quantidade em estoque é obrigatório"
          required
        />

        <InputText
          className=""
          label="Quantidade em vendas"
          onChange={e => setProductData({ ...productData, qt_vendas: e.target.value })}
          type="number"
          placeholder="Quantidade em vendas"
          feedBack="Quantidade em vendas é obrigatório"
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(!show)}>
          Fechar
        </Button>
        <Button variant="primary" onClick={registerProduct}>
          Salvar Produto
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default modalADD

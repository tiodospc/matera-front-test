import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  const { signOut } = useContext(AuthContext)

  const logOut = () => {
    signOut()

    if (!localStorage.getItem('@Auth:user')) {
      window.location.reload()
    }
  }

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Unidata Teste</Navbar.Brand>
          <Nav className="me-auto flex justify-between">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link>
              <button onClick={logOut}>Sair</button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar

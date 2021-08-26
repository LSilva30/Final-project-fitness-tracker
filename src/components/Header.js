import { Container, Navbar, Nav } from 'react-bootstrap'
import home from '../assets/home2.png'

function Header() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>SilvaStrong</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'><img className="home-icon" src={home} alt="home button" /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

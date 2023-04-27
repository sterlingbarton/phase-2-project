import {Nav,  Navbar, Container} from 'react-bootstrap';


export default function OuterNav() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">IRIS</Navbar.Brand>
              {/* <Nav.Link href="#link">Joke OTD</Nav.Link> */}
              <Nav.Link href="#link">Login</Nav.Link>
        </Container>
        </Navbar>
    </div>
    
  );
}
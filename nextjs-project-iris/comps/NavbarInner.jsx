import {Container, Nav, Navbar} from 'react-bootstrap'

function InnerNav() {
    return ( 
        <Navbar>
        <Container>
            <Nav.Link href="/tasklist">Tasks</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">Weather</Nav.Link>
            <Nav.Link href="#link">Calendar</Nav.Link>
            <Nav.Link href="/appointments">Appointments</Nav.Link>
            <Nav.Link href="/finance">Finance</Nav.Link>
        </Container>
        </Navbar>
     );
}

export default InnerNav;
import {useRouter} from 'next/router'
import {Container, Nav, Navbar} from 'react-bootstrap'

function InnerNav() {
    const router = useRouter();
    return ( 
        <Navbar style={{'background-color': '#C0C2C9'}}>
        <Container>
            <Nav.Link onClick={() => router.push('/tasklist')}>Tasks</Nav.Link>
            {/* <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">Weather</Nav.Link>
            <Nav.Link href="#link">Calendar</Nav.Link> */}
            <Nav.Link onClick={() => router.push('/appointments')} >Appointments</Nav.Link>
            <Nav.Link onClick={() => router.push('/finance')}>Finance</Nav.Link>
        </Container>
        </Navbar>
     );
}

export default InnerNav;
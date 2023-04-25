import Appt from '../comps/Appt';
import Head from 'next/head'
import {Container} from 'react-bootstrap'

function Appointments() {
    return ( 
        <>
         <Head>
            <title>IRIS | Appointments</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <Container>
            <h1>Appointments</h1>
            <Appt />
        </Container>
        </>
     );
}

export default Appointments;
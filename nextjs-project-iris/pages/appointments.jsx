import Appt from '../comps/Appt';
import Head from 'next/head'
import {Container} from 'react-bootstrap'

function Appointments({appointmentData}) {
    // console.log(appointmentData)
    return ( 
        <>
         <Head>
            <title>IRIS | Appointments</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <Container>
            <h1>Appointments</h1>
            <Appt appointmentData={appointmentData}/>
        </Container>
        </>
     );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3001/appointments');
    const appointmentData = await res.json();
    return {
      props: {
        appointmentData
      },
    }
  }

export default Appointments;
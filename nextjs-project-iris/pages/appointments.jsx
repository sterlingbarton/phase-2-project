import React, {useState} from 'react'
import Appt from '../comps/Appt';
import Head from 'next/head'
import {Container} from 'react-bootstrap'
import Modal from '../comps/Modal'


function Appointments({appointmentData}) {
    const [isModal, setIsModal] = useState(false)
    const [appointmentList, setAppointmentList] = useState({appointmentData})

    function handleClick({}){
        setIsModal(!isModal);
    }

    function handleSubmit(formData){
        fetch('http://localhost:3001/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
    },body: JSON.stringify(formData)
    })  .then((r) => r.json())
        .then((data) => setAppointmentList({...appointmentList, data}))
   }

    return ( 
        <>
         <Head>
            <title>IRIS | Appointments</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <Container>
            <h1>Appointments</h1>
            <Appt appointmentData={appointmentData} handleClick={handleClick}/>
             {isModal ?  <Modal handleCloseModal={setIsModal} isModal={isModal}  handleSubmit={handleSubmit}/> : null}
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
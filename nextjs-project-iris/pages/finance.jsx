import React, {useState} from 'react'
import Finances from "../comps/Finances";
import Head from "next/head";
import { Container } from "react-bootstrap";
import Modal from '../comps/Modal'
import styles from '../styles/Finances.module.css'

function Finance({financeData}) {
    const [isModal, setIsModal] = useState(false)
    const [financeList, setFinanceList] = useState({financeData})

     function handleClick(){
        setIsModal(!isModal);
    }

    function handleSubmit(formData){
        fetch('http://localhost:3001/finance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
    },body: JSON.stringify(formData)
    })  .then((r) => r.json())
        .then((data) => setFinanceList({...financeList, data}))
   }

    return ( 
        <>
        <Head>
            <title>IRIS | Finance</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container className={styles.display}>
            <h1 style={{'margin-left':'.5em'}}>Finance</h1>
            <div style={{'border-radius': '6px'}}>
                <Finances financeData={financeData} handleClick={handleClick}/>
                {isModal ?  <Modal handleCloseModal={setIsModal} isModal={isModal} handleSubmit={handleSubmit}/> : null}
            </div>
           
        </Container>
        </>
     );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/finance');
  const financeData = await res.json();
  return {
        props: {
          financeData
        },
      }
}


export default Finance;
import React from 'react'
import Head from 'next/head';
import Tasks from '../comps/Tasks';
import Finances from '../comps/Finances'
import Appt from '../comps/Appt'
import Stack from 'react-bootstrap/Stack'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';

export default function Home({taskData, appointmentData, financeData}) {
  return (
    <>
      <Head>
        <title>IRIS | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{'margin': '1em 3em'}}>
        <Stack className={styles.display} direction='horizontal' gap={2}>
          <Tasks taskData={taskData} />
          <Appt appointmentData={appointmentData}/>
          <Finances financeData={financeData}/>
        </Stack>
      </main>

    </>
  )
}

export async function getStaticProps() {
  const res1 = await fetch('http://localhost:3001/tasks');
  const taskData = await res1.json();
  const res2 = await fetch('http://localhost:3001/appointments');
  const appointmentData = await res2.json();
  const res3 = await fetch('http://localhost:3001/finance');
  const financeData = await res3.json();
  return {
    props: {
      taskData,
      appointmentData,
      financeData
    },
  }
}

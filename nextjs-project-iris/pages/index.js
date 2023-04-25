import React from 'react'
import Head from 'next/head';
import Tasks from '../comps/Tasks';
import Finances from '../comps/finances'
import Appt from '../comps/Appt'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>IRIS | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Tasks />
        <Finances />
        <Appt />
      </main>

    </>
  )
}

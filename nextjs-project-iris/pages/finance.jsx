import Finances from "../comps/Finances";
import Head from "next/head";
import { Container } from "react-bootstrap";

function Finance({financeData}) {
    return ( 
        <>
        <Head>
            <title>IRIS | Finance</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <h1>Finance</h1>
            <Finances financeData={financeData}/>
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
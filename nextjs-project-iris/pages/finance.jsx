import Finances from "../comps/Finances";
import Head from "next/head";
import { Container } from "react-bootstrap";

function Finance() {
    return ( 
        <>
        <Head>
            <title>IRIS | Finance</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <h1>Finance</h1>
            <Finances />
        </Container>
        </>
     );
}

export default Finance;
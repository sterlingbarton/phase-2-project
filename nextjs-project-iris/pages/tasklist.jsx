import Tasks from "../comps/Tasks";
import Head from "next/head";
import {Container} from 'react-bootstrap'

function Tasklist() {
    return ( 
        <>
        <Head>
            <title>IRIS | Tasks</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <h1>Tasklist</h1>
            <Tasks />
        </Container>
        </>
     );
}

export default Tasklist;
import Tasks from "../comps/Tasks";
import Head from "next/head";
import {Container} from 'react-bootstrap'

function Tasklist({taskData}) {
    return ( 
        <>
        <Head>
            <title>IRIS | Tasks</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <h1>Tasklist</h1>
            <Tasks taskData={taskData}/>
        </Container>
        </>
     );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3001/tasks');
    const taskData = await res.json();
    console.log(taskData)
    return {
        props: {
          taskData,
        }
    }
}
export default Tasklist;
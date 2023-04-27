import React,{useState} from 'react'
import Tasks from "../comps/Tasks";
import Head from "next/head";
import {Container} from 'react-bootstrap'
import Modal from '../comps/Modal'


function Tasklist({taskData}) {
    const [isModal, setIsModal] = useState(false)
    const [taskList, setTaskList] = useState({taskData})

    function handleClick(){
       setIsModal(!isModal);
   }


   function handleSubmit(formData){
        fetch('http://localhost:3001/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
    },body: JSON.stringify(formData)
    })  .then((r) => r.json())
        .then((data) => setTaskList({...taskList, data}))
   }

    return ( 
        <>
        <Head>
            <title>IRIS | Tasks</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <h1>Tasklist</h1>
            <Tasks taskData={taskData} handleClick={handleClick}/>
           {isModal ?  <Modal handleCloseModal={setIsModal} isModal={isModal} setTaskList={setTaskList}  handleSubmit={handleSubmit}/> : null}
        </Container>
        </>
     );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3001/tasks');
    const taskData = await res.json();
    return {
        props: {
          taskData,
        }
    }
}
export default Tasklist;
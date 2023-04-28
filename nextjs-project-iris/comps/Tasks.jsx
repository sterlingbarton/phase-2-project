import React from 'react';
import { format, isAfter } from 'date-fns'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Tasks.module.css'
import {useRouter} from 'next/router'
const { toDate, parse } = require('date-fns')

function Tasks({taskData, handleClick}) {

    const router = useRouter();

    const today = new Date();
    const formattedDate = format(today, 'MM/dd')

    const tasks = taskData.map(task => {
        const dueDate = toDate(new Date(2023, (task.monthDueDate -1), task.dueDate))
        const formattedDueDate = format(dueDate, 'MM/dd')
        return <li  key={task.id}>
            {formattedDueDate}
            <p>{task.name}</p>
            </li>
    })

    const newTask = tasks.map((task)=> task.props.children)
    // const newList = newTask.filter(task => isAfter(parse(task[0], 'MM/dd', new Date()), today))
    const newList = newTask.filter(task => task[0] === formattedDate)


    return ( 
        <Card className="text-center" style={{margin: '1em auto', 'box-shadow': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
            <Card.Header className={styles.header} onClick={() => router.push('/tasklist')}>
                Today's Tasks
                <Button variant='info' className={styles.addBtn} onClick={handleClick}>+</Button>
            </Card.Header>
            <Card.Body>
                <ul className={styles.liMap}>
                    {newList}
                </ul>
            </Card.Body>
        </Card>
     );
}

export default Tasks;
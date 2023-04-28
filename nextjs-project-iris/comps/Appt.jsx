import { format, isAfter } from 'date-fns'
import styles from '../styles/Appointments.module.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useRouter} from 'next/router'
const { toDate, parse } = require('date-fns')


function Appt({appointmentData, handleClick}) {
    const router = useRouter();

    const today = new Date();
    const formattedDate = format(today, 'MM/dd')

    const appointments = appointmentData.map(appointment => {
        const dueDate = toDate(new Date(2023, (appointment.monthDueDate -1), appointment.dueDate))
        const formattedDueDate = format(dueDate, 'MM/dd')
        return <li key={appointment.id}>
            {formattedDueDate}
            <p>{appointment.name}</p>
            </li>
    })

    const newAppointment = appointments.map((appointment)=> appointment.props.children)
    // const newList = newTask.filter(task => isAfter(parse(task[0], 'MM/dd', new Date()), today))
    const newAppointmentList = newAppointment.filter(appointment => appointment[0] === formattedDate)

    return ( 
        <Card className="text-center" style={{margin: '1em auto', 'box-shadow': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
             <Card.Header className={styles.header} onClick={() => router.push('/appointments')}>
                Today's Appointments
                <Button variant='info' className={styles.addBtn} onClick={handleClick}>+</Button>
             </Card.Header>
             <Card.Body>
                <ul className={styles.liMap}>
                    {newAppointmentList}
                </ul>
             </Card.Body>
        </Card>
     );
}

export default Appt;

import { format, isAfter } from 'date-fns'
const { toDate, parse } = require('date-fns')

function Appt({appointmentData, handleClick}) {

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
        <div>
            <h3>Today's Appointments</h3>
            <button onClick={handleClick}>+</button>
            <ul>{newAppointmentList}</ul>
        </div>
     );
}

export default Appt;

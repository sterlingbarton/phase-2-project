import { format, isAfter } from 'date-fns'
const { toDate, parse } = require('date-fns')

function Tasks({taskData, handleClick}) {
    const today = new Date();
    const formattedDate = format(today, 'MM/dd')

    const tasks = taskData.map(task => {
        const dueDate = toDate(new Date(2023, (task.monthDueDate -1), task.dueDate))
        const formattedDueDate = format(dueDate, 'MM/dd')
        return <li key={task.id}>
            {formattedDueDate}
            <p>{task.name}</p>
            </li>
    })

    const newTask = tasks.map((task)=> task.props.children)
    // const newList = newTask.filter(task => isAfter(parse(task[0], 'MM/dd', new Date()), today))
    const newList = newTask.filter(task => task[0] === formattedDate)


    return ( 
        <div>
            <h3>Today's Tasks</h3>
            <button onClick={handleClick}>+</button>
            <ul>{newList}</ul>
        </div>
     );
}

export default Tasks;
import { format, isAfter } from 'date-fns'
const { toDate, parse } = require('date-fns')

function Finances({financeData, handleClick}) {

    const today = new Date();
    const formattedDate = format(today, 'MM/dd')

    const finances = financeData.map(finance => {
        const dueDate = toDate(new Date(2023, (finance.monthDueDate -1), finance.dueDate))
        const formattedDueDate = format(dueDate, 'MM/dd')
        return <li key={finance.id}>
            {formattedDueDate}
            <p>{finance.name}</p>
            </li>
    })

    const newFinance = finances.map((finance)=> finance.props.children)
    // const newList = newTask.filter(task => isAfter(parse(task[0], 'MM/dd', new Date()), today))
    const newFinanceList = newFinance.filter(finance => finance[0] === formattedDate)

    return ( 
        <div>
            <h3>Today's Finances</h3>
            <button onClick={handleClick}>+</button>
            <ul>{newFinanceList}</ul>
        </div>
     );
}

export default Finances;
import { format, isAfter } from 'date-fns'
const { toDate, parse } = require('date-fns')
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Finances.module.css'
import {useRouter} from 'next/router'

function Finances({financeData, handleClick}) {
    const router = useRouter();

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
        <Card className="text-center" style={{margin: '1em auto', 'box-shadow': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
            <Card.Header className={styles.header} onClick={() => router.push('/finance')}>
                Today's Finances
                <Button variant='info' className={styles.addBtn} onClick={handleClick}>+</Button>
            </Card.Header>
            <Card.Body>
                <ul className={styles.liMap}>
                    {newFinanceList}
                </ul>
            </Card.Body>
        </Card>
     );
}

export default Finances;
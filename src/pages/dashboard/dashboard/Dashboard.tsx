import Pie from '../pie/Pie'
import './dashboard.css'
import Header from '../header/Header'
import TableRisk from '../table/Table'

export default function Dashboard(): JSX.Element {
    return (

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Header />
            <form style={{ display: 'flex', width: '70%' }}>
                <Pie />
                <TableRisk />
            </form>
        </div>

    )
}

import Pie from '../pie/Pie'
import './dashboard.css'
import Header from '../header/Header'
import TableRisk from '../table/Table'

export default function Dashboard(): JSX.Element {
    return (

        <div id='block_dashboard'>
            <Header />
            <form id='block_dashboard_form'>
                <Pie />
                <TableRisk />
            </form>
        </div>

    )
}

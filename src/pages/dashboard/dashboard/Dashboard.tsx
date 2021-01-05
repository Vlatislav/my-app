import Pie from '../pie/Pie'
import './dashboard.css'
import Header from '../header/Header'
import TableRisk from '../table/Table'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { listCompanyAction } from '../../../store/actions/listCompanyAction'

export default function Dashboard(): JSX.Element {

    const dispatch = useDispatch();

    //useEffect(() => {
    //    dispatch(listCompanyAction())
    //}, [])

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

import { useState, useEffect } from "react"
import { firebaseService } from '../../../services/firebase'
import Select, { ValueType } from 'react-select'
import './choiceCompany.css'
import { useDispatch } from "react-redux"
import { listCompanyAction } from "../../../store/actions/listCompanyAction"


export default function ChoiceCompany(): JSX.Element {

    const [companyListID, setCompanyListID] = useState([])
    const [companysName, setCompanysName] = useState<string[]>([])
    const [options, setOptions] = useState<object[]>([])
    const [companyName, PickCompanyName] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listCompanyAction())
        firebaseService.companyListID(setCompanyListID)
    }, [dispatch])

    useEffect(() => {
        firebaseService.setCompanysName(companyListID, setCompanysName)
        //console.log('companysName', companysName)
    }, [companyListID, companysName])

    useEffect(() => {
        firebaseService.setCompanyNamesInSelect(companysName, companyListID, setOptions)
    }, [companyListID, companysName]);

    const handlePickNameOfCompany = (value: ValueType<object, false>) => {
        PickCompanyName(String((Object.values(Object(value)))[1]))
    }

    //console.log(companyName)
    return (
        <div id="selectCompany">
            <Select
                defaultValue={options[0]}
                pickcompanyname={companyName}
                onChange={handlePickNameOfCompany}
                options={options}

            />
        </div>
    )
}
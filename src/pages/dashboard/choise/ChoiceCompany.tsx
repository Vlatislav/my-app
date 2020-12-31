import { useState, useEffect } from "react"
import { firebaseService } from '../../../services/firebase'
import Select, { ValueType } from 'react-select'
import './choiceCompany.css'

export default function ChoiceCompany(): JSX.Element {

    const [companyListID, setCompanyListID] = useState([])
    const [companysName, setCompanysName] = useState<string[]>([])
    const [options, setOptions] = useState<object[]>([])
    const [companyName, PickCompanyName] = useState('')

    useEffect(() => {
        firebaseService.companyListID(setCompanyListID)
    }, [])

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

    console.log(companyName)
    return (
        <div id="selectCompany">
            <Select
                pickcompanyname={companyName}
                onChange={handlePickNameOfCompany}
                options={options}
            />
        </div>
    )
}
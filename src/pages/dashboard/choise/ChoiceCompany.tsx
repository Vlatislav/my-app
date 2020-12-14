import { useState, useEffect } from "react"
import { firebaseService } from '../../../services/firebase'
import Select, { ValueType } from 'react-select'
import React from "react"
import './choiceCompany.css'

export default function ChoiceCompany(): JSX.Element {

    const [companyListID, setCompanyListID] = useState([])
    const [companysName, setCompanysName] = useState<string[]>([])
    const [options, setOptions] = useState<object[]>([])
    const [companyName, PickCompanyName] = useState('')

    useEffect(() => {
        firebaseService.fire.firestore().collection('User').doc(firebaseService.fire.auth().currentUser?.uid).get()
            .then(doc => {
                if (doc.exists) {
                    setCompanyListID(doc.data()?.idCompany)
                }
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        companyListID.forEach((item: string, index: number) => {
            firebaseService.fire.firestore().collection('Company').doc(item).get()
                .then(doc => {
                    setCompanysName(state => state.concat(doc.data()?.name))
                })
        })
    }, [companyListID])

    useEffect(() => {
        if (companysName.length === companyListID.length)
            for (const key in companysName)
                setOptions(state => state.concat({ value: companysName[key], label: companysName[key] }))
    }, [companyListID.length, companysName]);

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
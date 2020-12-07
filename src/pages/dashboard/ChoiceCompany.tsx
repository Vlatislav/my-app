import { useState, useEffect } from "react"
import { firebaseService } from '../../services/firebase'
import Select from 'react-select'

export default function ChoiceCompany(): JSX.Element {

    const [companyListID, setCompanyListID] = useState([])
    const [companyName, setCompanyName] = useState<string[]>([])
    const [options, setOptions] = useState<object[]>([])

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
                    setCompanyName(state => state.concat(doc.data()?.name))
                })
        })
    }, [companyListID])

    useEffect(() => {
        if (companyName.length == companyListID.length)
            for (const key in companyName)
                setOptions(state => state.concat({ value: companyName[key], label: companyName[key] }))
    }, [companyName]);


    return (
        <>
            <Select
                // onMenuOpen={handleClickMenu}
                options={options}
            />
        </>

    )
}
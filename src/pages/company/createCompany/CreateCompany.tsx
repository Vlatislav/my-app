import { useState } from "react"
import { useSelector } from "react-redux"
//import { firestore, auth } from "../../../index";
import { firebaseService } from '../../../services/firebase'
import { RootState } from "../../../store/reducers/rootReducer"


export default function CreateCompany(): JSX.Element {
    const [nameOfCompany, setNameOfCompany] = useState('')

    const IDCompany: never[] = useSelector((state: RootState) => state.listCompany.listCompanyInfo.listCompany)

    const handleChangeNameOfCompany = (event: React.FormEvent<HTMLInputElement>) => {
        setNameOfCompany(event.currentTarget.value);
        console.log('---', event.currentTarget.value, event.currentTarget.id)
    }

    const addNewCompany = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        firebaseService.addNewCompany(nameOfCompany, IDCompany)
    }

    return (
        <div>
            <div><h1>New company create</h1></div>
            <input placeholder="name of company" id="companyName" onChange={handleChangeNameOfCompany}></input>
            <button color="secondary" id="addBtn" onClick={addNewCompany}>Add new Company</button>
        </div>
    )
}
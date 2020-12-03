import { useState } from "react"
//import { firestore, auth } from "../../../index";
import { firebaseService } from '../../../services/firebase'


export default function CreateCompany(): JSX.Element {
    const [nameOfCompany, setNameOfCompany] = useState('')

    const handleChangeNameOfCompany = (event: React.FormEvent<HTMLInputElement>) => {
        setNameOfCompany(event.currentTarget.value);
        console.log('---', event.currentTarget.value, event.currentTarget.id)
    }



    const addNewCompany = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        firebaseService.addNewCompany(nameOfCompany)
    }

    return (
        <div>
            <div><h1>New company create</h1></div>
            <input placeholder="name of company" id="companyName" onChange={handleChangeNameOfCompany}></input>
            <button color="secondary" id="addBtn" onClick={addNewCompany}>Add new Company</button>
        </div>
    )
}
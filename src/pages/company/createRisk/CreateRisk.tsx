import { FaceRounded } from "@material-ui/icons"
import { useState } from "react"
//import { firestore, auth } from "../../../index";
import { firebaseService } from '../../../services/firebase'


export default function CreateRisk(): JSX.Element {
    const [nameOfRisk, setNameOfRisk] = useState('')
    const [valueOfRisk, setValueOfRisk] = useState('Minimum')
    const [nameOfCompanyForAddRisk, setNameOfCompanyForAddRisk] = useState('')

    const handleChangeNameOfRisk = (event: React.FormEvent<HTMLInputElement>): void => {
        setNameOfRisk(event.currentTarget.value)
        console.log('---', event.currentTarget.value, event.currentTarget.id)
    }

    const handleChangeValueOfRisk = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValueOfRisk(event.currentTarget.value)
        console.log('---', event.currentTarget.value, event.currentTarget.id)
    }

    const handleChangeNameOfCompanyForAddRisk = (event: React.FormEvent<HTMLInputElement>): void => {
        setNameOfCompanyForAddRisk(event.currentTarget.value);
        console.log('---', event.currentTarget.value, event.currentTarget.id)
    }

    const addNewRisk = async (event: any) => {
        event.preventDefault();
        /*if (userID === undefined)
            return alert('Error.You need to register')
        const objForName = await firestore.collection('Company').where('name', '==', nameOfCompanyForAddRisk).get();


        if (objForName.empty) {
            alert(`company named ${nameOfCompanyForAddRisk} does not exist`)
        }
        else {

            firestore.collection('User').doc(userID).get()
                .then(doc => {
                    if (doc.exists) {
                        let listIdCompany = doc.data()?.idCompany

                        let risksObj: object = {}
                        let companyID: string = ''
                        objForName.forEach(doc => {
                            risksObj = doc.data()?.risks
                            companyID = doc.id
                        });

                        if (listIdCompany.includes(companyID)) {
                            if (nameOfRisk && isNaN(+nameOfRisk)) {
                                firestore.collection('Company').doc(companyID).update({ risks: { ...risksObj, [nameOfRisk]: [valueOfRisk] } })
                                    .then(resp => console.log('it\'s okay', resp))
                                    .catch(error => console.log(new Error(error)))
                                alert(`You added a new risk ${nameOfRisk}`)
                                console.log(risksObj);
                            }
                            else {
                                alert(`Invalid value of name risk ${nameOfRisk}`)
                            }
                        }
                        else {
                            alert('This is not your company, you cannot add your risk to it')
                        }
                    }
                })
        }*/
    }

    return (
        <div id="addRisk" >
            <div><h1>New risk create</h1></div>
            <input placeholder="name of company" id="companyNameForAddRisk" onChange={handleChangeNameOfCompanyForAddRisk}></input>
            <input placeholder="name of risk" id="riskName" onChange={handleChangeNameOfRisk}></input>
            <select id="select" onChange={handleChangeValueOfRisk}>
                <option>Minimum</option>
                <option>Middle</option>
                <option>High</option>
            </select>
            <button onClick={addNewRisk}>Add new Risk</button>
        </div>
    )
}
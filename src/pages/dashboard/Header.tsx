import { firebaseService } from '../../services/firebase'
import { useState } from 'react'
import ChoiceCompany from './ChoiceCompany'
import './header.css'

export default function Dashboard(): JSX.Element {
    const [email, setEmail] = useState('')

    firebaseService.fire.firestore().collection('User').doc(firebaseService.fire.auth().currentUser?.uid).get()
        .then(doc => {
            if (doc.exists) {
                setEmail(doc.data()?.email)
                console.log(email)
            }
        })
    const logOut = () => {
        firebaseService.fire.auth().signOut()
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
        setEmail('sign out')

    }

    return (
        <div id='header__block'>
            <h2>You sign in with: {email}</h2>
            <ChoiceCompany />
            <button id='button' onClick={logOut}>Log out</button>
        </div>
    )
}

import { firebaseService } from '../../../services/firebase'
import ChoiceCompany from '../choise/ChoiceCompany'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../../store/actions/loginAction'
import { RootState } from '../../../store/reducers/rootReducer'

export default function Header(props: any): JSX.Element {
    const email = useSelector((state: RootState) => state.login.userInfo.email)
    console.log(email)
    const dispatch = useDispatch();

    const logOut = () => {
        firebaseService.fire.auth().signOut()
            .then(resp => {
                dispatch(logoutAction());
            })
            .catch(error => console.log(error))
        // setEmail('sign out')
        window.location.reload()
    }

    return (
        <div className="header">
            <div id='header__block'>
                <h2>You sign in with: {email}</h2>
                <ChoiceCompany />
                <button id='button' onClick={logOut}>Log out</button>
            </div>
        </div>
    )
}

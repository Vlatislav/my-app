import { firebaseService } from '../../../services/firebase'
import ChoiceCompany from '../choise/ChoiceCompany'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../../store/actions/loginAction'
import { RootState } from '../../../store/reducers/rootReducer'
import { useHistory } from 'react-router-dom'

export default function Header(props: any): JSX.Element {

    const history = useHistory();

    const email = useSelector((state: RootState) => state.login.userInfo.email)
    console.log('email', email)
    const dispatch = useDispatch();

    const logOut = () => {
        firebaseService.logOutButtonHeader(dispatch, logoutAction)
        history.push('/')
    }

    return (
        <div className="header">
            <div id='header__block'>
                <h2>You sign in with: {!email ? 'none' : email}</h2>
                <ChoiceCompany />
                <button id='button' onClick={logOut}>Log out</button>
            </div>
        </div>
    )
}

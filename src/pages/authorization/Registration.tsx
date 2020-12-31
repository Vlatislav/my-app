import React, { useState } from 'react'
import { firebaseService } from '../../services/firebase'
import './registration.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, loginErrorAction, loginSuccessAction } from '../../store/actions/loginAction';
import { RootState } from '../../store/reducers/rootReducer';
import { useHistory } from 'react-router-dom';

export default function Registration(): JSX.Element {

  const history = useHistory();

  const [email, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [isLogin, toggleLogin] = useState(false)
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.login.isLoading)

  const handleLoginChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLogin(event.currentTarget.value);
    console.log(event.currentTarget.value, event.currentTarget.id)
  }

  const handlePassChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPass(event.currentTarget.value);
    console.log(event.currentTarget.value, event.currentTarget.id)
  }
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!isLogin) {
      try {
        dispatch(loginAction())
        setTimeout(async () => {
          const emailFromBackend = await firebaseService.logIn(email, pass)
          if (emailFromBackend !== 'error') {
            dispatch(loginSuccessAction({ email: emailFromBackend }));
            //const listFromBackend = firebaseService.getListCompany()
            //console.log(22222222, listFromBackend)

            history.push("/company")
          }
          else dispatch(loginErrorAction(emailFromBackend))
        }, 5000);
      }
      catch (e) {
        dispatch(loginErrorAction(e.message))
      }

    }
    else {
      firebaseService.register(email, pass)
    }
    console.log(email, pass)
  }

  const isChecked = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.checked)
    toggleLogin(event.currentTarget.checked);
  }

  return (
    <>
      {isLoading ? (<div>LOADING ...</div>) : (
        <form action="/company">
          <h2>SIGN IN</h2>
          <label className="switch">
            <input id="input" type="checkbox"
              onChange={isChecked}></input>
            <span className="slider round"></span>
          </label>

          <label>
            <p className="label-txt">EMAIL</p>
            <input
              type="text"
              className="input"
              id="email"
              placeholder="e-mail"
              onChange={handleLoginChange}>
            </input>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>

          <label>
            <p className="label-txt">PASSWORD</p>
            <input
              type="password"
              className="input"
              id="password"
              placeholder="password"
              onChange={handlePassChange}>
            </input>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <button
            type="submit"
            onClick={handleSubmit}
          >
            Submit
      </button>

        </form>

      )}
    </>
  )
}
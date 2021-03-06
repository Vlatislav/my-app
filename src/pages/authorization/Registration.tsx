import React, { useState } from 'react'
import './registration.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/actions/loginAction';
import { RootState } from '../../store/reducers/rootReducer';
import { registrationAction } from '../../store/actions/registrationAction';

export default function Registration(): JSX.Element {

  const [email, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [isLogin, toggleLogin] = useState(false)
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.login.isLoading)
  const handleLoginChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLogin(event.currentTarget.value);
    //console.log(event.currentTarget.value, event.currentTarget.id)
  }

  const handlePassChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPass(event.currentTarget.value);
    //console.log(event.currentTarget.value, event.currentTarget.id)
  }
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!isLogin) {
      dispatch(loginAction({
        email, pass
      }))

      //try {
      //  dispatch(loginAction())
      //  setTimeout(async () => {
      //    const emailFromBackend = await firebaseService.logIn(email, pass)
      //    if (emailFromBackend !== 'error') {
      //      dispatch(loginSuccessAction({ email: emailFromBackend }));
      //
      //      history.push("/company")
      //    }
      //    else dispatch(loginErrorAction(emailFromBackend))
      //  }, 5000);
      //}
      //catch (e) {
      //  dispatch(loginErrorAction(e.message))
      //}



      //firebaseService.fire.firestore().collection('User').doc(firebaseService.fire.auth().currentUser?.uid).get()
      //  .then(doc => {
      //    if (doc.exists) {
      //      setLogin(doc.data()?.email)
      //      setPass(doc.data()?.password)
      //    }
      //  })
      //

    }
    else {

      dispatch(registrationAction({ email, pass }))

      //firebaseService.register(email, pass)
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
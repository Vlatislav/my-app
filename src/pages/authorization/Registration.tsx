import React, { useState } from 'react'
import { firebaseService } from '../../services/firebase'
import './registration.css'
//import { firebaseService } from '../../../services/firebase'
//import firebase from 'firebase'


export default function Registration(): JSX.Element {

  //firebase.auth().signOut()
  //  .then(resp => console.log('resp', resp))
  //  .catch(error => console.log('error', error));

  const [email, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [isLogin, toggleLogin] = useState(true)

  const handleLoginChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLogin(event.currentTarget.value);
    console.log(event.currentTarget.value, event.currentTarget.id)
  }

  const handlePassChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPass(event.currentTarget.value);
    console.log(event.currentTarget.value, event.currentTarget.id)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (isLogin) {
      firebaseService.logIn(email, pass)
    }
    else {
      firebaseService.register(email, pass)
    }
    /*console.log(email, pass)

    if (isLogin) {
      console.log('sign in men')

      firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(resp => {
          console.log(resp.user?.uid)
          //document.location.href += 'company'
          return alert(`You sign in with ${email}`)
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found')
            return alert('USER NOT FOUND!!! GO TO REGISTRATION WINDOW!!!')
          else
            if (error.code === 'auth/wrong-password')
              return alert('WRONG PASSWORD!!! TRY AGAIN!!!')
          return console.log(error)
        })
    }
    else {
      console.log('registration in men')
      firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(resp => {
          console.log(resp.user)
          firestore.collection('User').doc(resp.user?.uid).set({
            email: email,
            password: pass,
            idCompany: [],
          })
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use')
            return alert('USER ALREADY IN USE!!! GO TO SIGN IN!!!')
        })
    }*/
  }

  const isChecked = (event: React.FormEvent<HTMLInputElement>) => {
    toggleLogin(event.currentTarget.checked);
  }

  return (

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
  )
}


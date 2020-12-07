import React, { useState } from 'react'
import { firebaseService } from '../../services/firebase'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import './registration.css'

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: `94%`,
    left: 251,
    width: '20%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Registration(): JSX.Element {

  const [email, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [isLogin, toggleLogin] = useState(false)
  const [open, setOpen] = useState(true)

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
    if (!isLogin) {
      firebaseService.logIn(email, pass)
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

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
        </Alert>
        </Snackbar>
      </div>
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
    </>
  )
}


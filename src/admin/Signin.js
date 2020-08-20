import React, { useState } from 'react'
import Base from '../core/Base'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../firebase/firebase'

const Signin = () => {

  let history = useHistory()

  const [login, setLogin] = useState({ email: "", password: "" })
  const [resp, setResp] = useState({})

  const emailChange = (e) => {
    setLogin({ ...login, email: e.target.value })
  }

  const passwordChange = (e) => {
    setLogin({ ...login, password: e.target.value })
  }

  const Login = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(login.email, login.password).then((u) => {
      console.log(u)
      history.push('/admin/dashboard')
    }).catch((err) => {
      console.log(err)
      setResp(err)
    })
  }

  return (
    <Base>
      <form className="container" style={{ width: '700px' }} onSubmit={Login} >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={login.email} onChange={emailChange} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" value={login.password} onChange={passwordChange} />
        </div>
        <button type="submit" class="btn btn-warning btn-block">Submit</button>
      </form>
      {
        resp.message ? <p className="text-danger">{resp.message}</p> : ""
      }
    </Base>
  )

}
export default Signin;

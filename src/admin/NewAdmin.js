import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../core/Base'
import firebase from '../firebase/firebase'

export default function NewAdmin() {

    let history = useHistory()

    const [info, changeInfo] = useState({ email: "", passowrd: "" })


    const emailChange = (e) => {
        changeInfo({ ...info, email: e.target.value })
    }

    const passwordChange = (e) => {
        changeInfo({ ...info, passowrd: e.target.value })
    }

    const SignUp = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(info.email, info.passowrd).then((u) => {
            console.log(u)
            history.push('/admin/dashboard')
        }).catch((err) => { console.log(err) })
    }

    return (
        <Base>
            <h1>New Admin Page</h1>
            <form className="container" style={{ width: '700px' }} onSubmit={SignUp} >
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={info.email} onChange={emailChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" value={info.password} onChange={passwordChange} />
                </div>
                <button type="submit" class="btn btn-warning btn-block">Submit</button>
            </form>
        </Base>
    )
}

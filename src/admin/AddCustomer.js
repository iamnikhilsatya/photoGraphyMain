import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../core/Base'
import firebase from '../firebase/firebase'

const AddCustomer = () => {

    let history = useHistory()

    const [info, changeInfo] = useState({ name: "", email: "", passowrd: "", title: "", status: "" })

    const nameChange = (e) => {
        changeInfo({ ...info, name: e.target.value })
    }

    const emailChange = (e) => {
        changeInfo({ ...info, email: e.target.value })
    }

    const passwordChange = (e) => {
        changeInfo({ ...info, passowrd: e.target.value })
    }

    const titleChange = (e) => {
        changeInfo({ ...info, title: e.target.value })
    }

    const statusChange = (e) => {
        changeInfo({ ...info, status: e.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const itemsRef = firebase.database().ref("Users")
        const User = {
            Name: info.name,
            Email: info.email,
            Password: info.passowrd,
            Title: info.title,
            Status: info.status
        }
        itemsRef.push(User)
        history.push('/admin/dashboard')
    }

    return (
        <Base>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="FormControlName">Full Name</label>
                    <input type="text" className="form-control" id="FormControlName" value={info.name} onChange={nameChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={info.email} onChange={emailChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={info.passowrd} onChange={passwordChange} />
                </div>
                <div className="form-group" onChange={titleChange}>
                    <h5>Title</h5>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Wedding" />
                        <label className="form-check-label" for="inlineRadio1">Wedding</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Reception" />
                        <label className="form-check-label" for="inlineRadio2">Reception</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Birthday" />
                        <label className="form-check-label" for="inlineRadio3">Birthday</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="Engagement" />
                        <label className="form-check-label" for="inlineRadi43">Engagemet</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="Pre-Wedding Shoots" />
                        <label className="form-check-label" for="inlineRadio5">Pre-Wedding Shoots</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="Others" />
                        <label className="form-check-label" for="inlineRadio6">Others</label>
                    </div>
                </div>
                <div className="form-group" onChange={statusChange}>
                    <h5>Status</h5>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="Pending" />
                        <label className="form-check-label" for="inlineRadio7">Pending</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="Confirmed" />
                        <label className="form-check-label" for="inlineRadio8">Confirmed</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Base>
    )
}

export default AddCustomer;

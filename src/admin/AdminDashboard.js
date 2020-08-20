import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Base from '../core/Base'
import firebase from '../firebase/firebase'

const AdminDashboard = () => {

  let history = useHistory()

  const { user } = useContext(AuthContext)

  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   const itemBack = firebase.database().ref("Users")
  //   itemBack.on('value', (snapshot) => {
  //     let users = snapshot.val();
  //     let newState = [];
  //     for (let user in users) {
  //       newState.push({
  //         id: user,
  //         name: users[user].Name,
  //         email: users[user].Email,
  //         password: users[user].Password,
  //         title: users[user].Title,
  //         status: users[user].Status
  //       })
  //     }
  //     setUsers(newState)
  //   })
  // }, [])

  return (
    <Base>
      {
        user ? <h1>admin dashboard</h1> : <h4>*YOU HAVE TO BE LOGGED IN AS AN ADMIN FIRST*</h4>
      }
      {/* <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.title}</td>
                <td>{user.status}</td>
              </tr>
            ))
          }
        </tbody>
      </table> */}
    </Base>
  )
}
export default AdminDashboard;

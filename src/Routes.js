import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../src/admin/Signin'
import AddCustomer from '../src/admin/AddCustomer'
import AdminDashboard from './admin/AdminDashboard'
import Signin from '../src/admin/Signin'
import { AuthContext } from './context/AuthContext'
import NewAdmin from './admin/NewAdmin'

const Routes = () => {

   const { authListener } = useContext(AuthContext)

   useEffect(() => {
      authListener()
   }, [])

   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Signin} />
            <Route path="/addcustomer" exact component={AddCustomer} />
            <Route path="/signin" exact component={Login} />
            <Route path="/admin/dashboard" exact component={AdminDashboard} />
            <Route path="/newadmin" exact component={NewAdmin} />
         </Switch>
      </BrowserRouter>
   )
}
export default Routes;
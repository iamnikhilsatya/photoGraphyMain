import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from '../src/admin/Signin'
import AddCustomer from '../src/admin/AddCustomer'
import AdminDashboard from './admin/AdminDashboard'
import Signin from '../src/admin/Signin'
const  Routes = ()=> {
    return (
       <BrowserRouter>
       
            <Switch>
                 <Route path="/" exact component={Signin} />
                 <Route path="/addcustomer" exact component={AddCustomer} />
                 <Route path="/signin" exact component={Login} />
                 <Route path="/admin/dashboard" exact component={AdminDashboard} />
          </Switch>
       </BrowserRouter>
    )
}
export default Routes;
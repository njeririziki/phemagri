import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {PrivateRoute, PublicRoute, AdminRoute} from './DefinedRoutes'
import LogIn from '../Pages/SignIn'
import SignUp from  '../Pages/SignUp'
import UserDash from '../Pages/App'
import AdminDash from '../Pages/AdminDashboard'
import {AuthProvider} from '../Context/AuthContext'

const Router = () => {
    return ( 
     <AuthProvider>
     <BrowserRouter>
         <div>
         <Switch>
         <PrivateRoute path='/' component={UserDash} exact />
         <PublicRoute path='/login' component={LogIn} exact/>
         <PublicRoute path='/signup' component={SignUp} exact/>
         <PrivateRoute path='/admin' component={AdminDash} exact/>
         </Switch>
       
         </div>
        </BrowserRouter>
     </AuthProvider>
 
     );
}
 
export default Router;
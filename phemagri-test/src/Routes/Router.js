import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LogIn from '../Pages/SignIn'
import SignUp from  '../Pages/SignUp'
import Dashboard from '../Pages/Dash'

const Router = () => {
    return ( 
    
     <BrowserRouter>
         <Routes>
         <Route path='/' element={<LogIn/>} exact/>
         <Route path='/home/:role/:user' element={<Dashboard/>} /> 
         <Route path='/signup' element={<SignUp/>} exact/>
         </Routes>
   
        </BrowserRouter>
    
 
     );
}
 
export default Router;
import React, {useContext,useState,useEffect} from 'react';
import {PageHeader,Button} from 'antd'

import {Link, useLocation,useNavigate} from 'react-router-dom'

import '../styles/components.css'


const Header = (props) => {
   
    const [userDash, setUserDash] = useState(true)
      const navigate = useNavigate();
      const logOut =()=>{
      localStorage.clear();
      navigate('/signup');
      }
      
    return ( 
    <div className="Header">
    <PageHeader
    title= {props.title}
    subTitle={props.subtitle}
    extra={
         <Button type='success' size='large' 
         onClick={logOut}>
                    Log out
                </Button> } 
    />    
 
    </div> );
}
 
export default Header;

import React from 'react';
import {PageHeader,Button, Descriptions} from 'antd'

import {useNavigate} from 'react-router-dom'

import '../styles/components.css'


const Header = (props) => {
   
      const navigate = useNavigate();
      const logOut =()=>{
      navigate('/');
      }
      
    return ( 
  
    <PageHeader
    title= {props.title}
    subTitle={props.subtitle }
    className="Header"
    extra={
         <Button type='success' size='large' 
         onClick={logOut}>
                    Log out
                </Button> } 
    >
      
      </PageHeader>   
 
   );
}
 
export default Header;

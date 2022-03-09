import React, {useContext,useState,useEffect} from 'react'
import {RoleProvider,RoleContext} from '../Context/RoleContext' ;
import HeaderComp from '../Components/Header';
import {Layout} from 'antd'
import Farmer from '../Components/dashboards/Farmer'
import InputProvider from '../Components/dashboards/InputProvider';
import Financier from '../Components/dashboards/Financier';
import Vendor from '../Components/dashboards/Vendor';


const { Header, Content, Footer, Sider } = Layout;

const RoledDash =()=>{
  const {creds}= useContext(RoleContext);

  if(creds.role === 'Farmer'){
    return <Farmer/>
   }else if(creds.role === 'Input Provider'){
     return <InputProvider/> 
   } else if(creds.role === 'Bank/Investor'){
    return <Financier/>
   }else{
    return <Vendor/>
   }
}

function Dash() {
  const {creds}= useContext(RoleContext);
   
 

    return (
      <div>
        <Layout>
        
          <HeaderComp title={creds.username}/>
        
          <Content>
           <RoledDash/>
              {/* {creds.role === 'Input Provider'? <InputProvider/>
              :
              <Farmer/> } */}
              {/* <Farmer/>
              <Financier/>
              <Vendor/>
              <InputProvider/>  */}
        
          </Content>
        </Layout>
      
      </div>
    );
  }

  function Dashboard() {
    return (
      <RoleProvider>
      <Dash/>
      </RoleProvider>
    )
  }
  
  export default Dashboard;
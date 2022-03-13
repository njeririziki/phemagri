import React, {useContext} from 'react'
import {RoleProvider,RoleContext} from '../Context/RoleContext' ;
import HeaderComp from '../Components/Header';
import {Layout} from 'antd'
import Farmer from '../Components/dashboards/Farmer'
import InputProvider from '../Components/dashboards/InputProvider';
import Financier from '../Components/dashboards/Financier';
import Vendor from '../Components/dashboards/Vendor';


const {Content} = Layout;

const RoledDash =()=>{
  const {user}= useContext(RoleContext);

  if(user.role_id === 1){
    return <Farmer/>
   }else if(user.role_id === 2){
     return <InputProvider/> 
   } else if(user.role_id === 3){
    return <Financier/>
   }else{
    return <Vendor/>
   }
}

function Dash() {
  const {user}= useContext(RoleContext);
   
    return (
      <div>
        <Layout>
        
          <HeaderComp title={user.first_name} subtitle={user.user_id}
          description={user.email}/>
        
          <Content>
           <RoledDash/>  
          </Content>
        </Layout>
      
      </div>
    );
  }

  // function Dashboard() {
  //   return (
  //     <RoleProvider>
  //     <Dash/>
  //     </RoleProvider>
  //   )
  // }
  
  export default Dash;
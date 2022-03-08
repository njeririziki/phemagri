import React, {useContext,useState,useEffect} from 'react'
import Grid from '../Components/elems/Grid'
import {RoleProvider,RoleContext} from '../Context/RoleContext' ;
import Header from '../Components/Header';
import {useParams} from 'react-router-dom'

const totals=[
  {title:'Revenue', number: 134543,color:'#00c853', percent:'50'},
  {title: 'Invoiced', number: 234225, color:'#e91e63', percent:'30'},
  {title: 'New Clients', number:34,color:'#4dd0e1', percent:'12'}, 
  {title: 'Accounts ', number: 134,color:'#ff7043', percent:'8'}, 
]
function Dash() {
  const {creds}= useContext(RoleContext);
   
 

    return (
      <div>
       <Header title={creds.username}/>
        <Grid data={totals}/>
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
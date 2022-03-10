import React, { useContext,useEffect,useState } from 'react'
import ClientDetails  from '../elems/ClientDetails';
import List from '../elems/List'
import Pie from '../elems/Pie'
import '../../styles/components.css'
import { Card } from 'antd';
import { RoleContext } from '../../Context/RoleContext';
import axios from 'axios'

 

const data=[
  {
    
      label: 'Bank',
      value: 50,
      color: '#a5d6a7'
  },
  {
   
      label: 'Savings',
      value: 40,
      color: '#ffcc80'
  },
  {
   
      label: 'Remaining ',
      value: 10,
      color: '#f5f5f5'
  }
]

const Farmer =()=>{

  const [profile,setProfile]= useState();
  const {creds}= useContext(RoleContext);

  const details={
    name:creds.username,
    description:creds.role,
    phone: creds.phoneNumber
}


useEffect(() => {
  let profile =[]
   
  async function getData (){
    const request= await axios.get( 'https://randomuser.me/api/',{
        params:{
            results:10,
            inc:'name ,email,gender,phone, picture,cell,id,registered,login'
        }
    })
   
    const profiles = request.data.results;
     
    profiles.forEach(element => {
        profile.push({
           key: element.login.uuid,
           name: `${element.name.first} ${element.name.last}`,
           email: element.email,
           phone: element.phone,
           avatar: element.picture.medium,
           date: element.registered.date

        })
        
    });
  
   setProfile(profile)
 //    console.log(profile)
    return request
}
getData();  
}, [])

    return(
      <div className="grid">
        <div className='list'>
          <div className="gridroot">
        <ClientDetails details={details}/>
        <Card title= 'Fund Meter' bordered={false}>
        <Pie data={data}/>
        </Card>
       </div>
       <div className='list'>
       <List header='Sell to' data={profile}   pageSize={4} action='Contact'/>
       </div>
      </div>
      <div  className='sidelist' >
       <List header='Get Funding' data={profile}   pageSize={9} action='Contact'/>
        </div>
      </div>
       
   
        )
  
}

export default Farmer;
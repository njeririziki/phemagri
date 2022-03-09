import React, { useContext,useEffect,useState } from 'react'
import ClientDetails  from '../elems/ClientDetails';
import Grid from '../elems/Grid';
import List from '../elems/List'
import Scheduler from '../elems/scheduler'
import Pie from '../elems/Pie'
import '../../styles/components.css'
import { Card } from 'antd';
import { RoleContext } from '../../Context/RoleContext';
import axios from 'axios'

  
  const events=[
    {id:'12/3/2021', issue:'Planting', description:' ', color:'red'},
    {id:'13/4/2021',issue: 'Weeding', description:'' , color:'red'},
    {id:'19/4/2021',issue:'Harvesting', description:' ',color:'brown'},
    {id:'21/4/2021',issue: 'Packaging', description:' ' , color:'yellow'},
    {id:'23/4/2021',issue:'Transporting', description:' ',color:'green'},
  ]
  

const data=[
  {
     // id:'Paid',
      label: 'Bank',
      value: 50,
      color: '#a5d6a7'
  },
  {
     // id:'Invoiced',
      label: 'Savings',
      value: 40,
      color: '#ffcc80'
  },
  {
     // id:'Lost',
      label: 'Remaining ',
      value: 10,
      color: '#f5f5f5'
  }
]
const listData=[
  { id:'33462',  name:'Teaji  Fertilisers Ltd' },
  {id:'37312', name: ' Geray Agribusiness Ltd'  },
  { id:'39212',  name: ' Cesay Equipment Ltd' },
  { id:'33902',  name: ' CLay Seeds Ltd', },
  { id:'49212',  name: ' Waky Machinery Ltd', },
  { id:'34902',  name: ' CPlar Ltd', },
  { id:'39412',  name: ' Yevwa Ltd',},
  { id:'33942',  name: ' Poela Ltd',},
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
      <div className="gridroot">
        <div style={{width:'50vw'}}>
          <div className="gridroot">
        <ClientDetails details={details}/>
        <Card title= 'Fund Meter' bordered={false}>
        <Pie data={data}/>
        </Card>
       </div>
       <div style={{width:'50vw'}}>
       <List header='Sell to' data={profile}   pageSize={4} action='Contact'/>
       </div>
      </div>
      <div style={{width:'35vw'}}>
       <List header='Get Funding' data={profile}   pageSize={9} action='Contact'/>
        </div>
      </div>
       
   
        )
  
}

export default Farmer;
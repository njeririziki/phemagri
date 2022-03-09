import React, { useContext } from 'react'
import ClientDetails  from '../elems/ClientDetails';
import Grid from '../elems/Grid';
import List from '../elems/List'
import Scheduler from '../elems/scheduler'
import Pie from '../elems/Pie'
import '../../styles/components.css'
import { Card } from 'antd';
import { RoleContext } from '../../Context/RoleContext';


  
  const events=[
    {id:'12/3/2021', issue:'Planting', description:' ', color:'red'},
    {id:'13/4/2021',issue: 'Weeding', description:'' , color:'red'},
    {id:'19/4/2021',issue:'Harvesting', description:' ',color:'brown'},
    {id:'21/4/2021',issue: 'Packaging', description:' ' , color:'yellow'},
    {id:'23/4/2021',issue:'Transporting', description:' ',color:'green'},
  ]
  

const details={
    name:'Bazuu Wdadu',
    description:'Farmer',
    phone: '0712343454'
}
const data=[
  {
     // id:'Paid',
      label: 'Bank',
      value: 30,
      color: '#2e7d32'
  },
  {
     // id:'Invoiced',
      label: 'Wellwishers',
      value: 60,
      color: '#fdd835'
  },
  {
     // id:'Lost',
      label: 'Remaining ',
      value: 10,
      color: '#c62828'
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

  const {creds}= useContext(RoleContext);

  const details={
    name:creds.username,
    description:creds.role,
    phone: creds.phoneNumber
}

    return(
        <div className="root">
          <div className="gridroot">
        <ClientDetails details={details}/>
        <Card title= 'Fund Meter'>
        <Pie data={data}/>
        </Card>
       </div>
        
       <div className="gridroot">
       <div style={{width:'50vw'}}>

       <List header='Orders due' data={listData}   pageSize={3} action='Ship'/>
        </div>
       <div style={{width:'40vw',marginLeft:'20px'}}>
       <Scheduler events={events}/>
       </div>
       </div>
      </div>
   
        )
  
}

export default Farmer;
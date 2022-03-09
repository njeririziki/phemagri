import React from 'react'
import Grid from '../elems/Grid';
import Scheduler from '../elems/scheduler'

import {DollarSign,UserCheck,UserMinus,Send}  from 'react-feather'


const dollar= <DollarSign size='20px'/>
const userCheck= <UserCheck size='20px'/>
const userMinus= < UserMinus size='20px'/>
const send=< Send size='20px'/>


// const totals=[
//     {title:'Revenue', number: 134543,color:'#00c853', percent:'50'},
//     {title: 'Invoiced', number: 234225, color:'#e91e63', percent:'30'},
//     {title: 'New Clients', number:34,color:'#4dd0e1', percent:'12'}, 
//     {title: 'Accounts ', number: 134,color:'#ff7043', percent:'8'}, 
//   ]
  const totals=[
    {title:'Orders', number: 134, icon:send, },
    {title: 'Invoices Due', number: 234, icon:userMinus},
    {title: 'Stock', number:34, icon:userCheck}, 
    {title: ' Amount Billed', number: 134310, icon:dollar}, 
]
  
const Vendor =()=>{

    return(
        <div>
        <Grid data={totals}/>
       
        </div>
        )
  
}

export default Vendor;
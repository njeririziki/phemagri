import React, {useEffect,useState} from 'react'
import Grid from '../elems/Grid';
import List from '../elems/List';
import {DollarSign, User}  from 'react-feather'
import '../../styles/components.css'
import axios from 'axios'


const dollar= <DollarSign size='20px'/>
const user= <User size='20px'/>

const data=[
    { id:'33462',  name:'Vegetables' },
    {id:'37312', name: ' Fruits'  },
    { id:'39212',  name: 'Cereals' },
    { id:'33902',  name: ' Wheat', },
    { id:'49212',  name: ' Maize', },
    { id:'34902',  name: ' Tea leaves', },
    { id:'39412',  name: ' Coffee',},
    { id:'33942',  name: ' Cashew Nuts',},
]

  const totals=[
    {title:'Sales', number: 134000, icon:dollar },
     {title: 'Stock', number: 234000, icon:dollar} ,
    {title: 'Farmers', number:9, icon:user}, 
    {title: ' Total Bought', number: 130789, icon:dollar}, 
]
  
const Vendor =()=>{
    const [profile,setProfile]= useState();

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
            <Grid data={totals}/>
            <List header='My Farmers' data={profile}   pageSize={3} action='Buy'/>
            </div>
            <div style={{width:'40vw',marginLeft:'20px'}}>
            <List header='Top Selling Products' data={data}   pageSize={5} action='Sell' />
            </div>
            
        </div>
        )
  
}


export default Vendor;
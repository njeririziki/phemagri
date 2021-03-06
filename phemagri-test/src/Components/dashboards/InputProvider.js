import React, {useEffect,useState} from 'react'
import Grid from '../ReusableComponents/Grid';
import List from '../ReusableComponents/List';
import {DollarSign,Truck,Package,ShoppingCart}  from 'react-feather'
import '../../styles/components.css'
import axios from 'axios'


const dollar= <DollarSign size='20px'/>
const truck= <Truck size='20px'/>
const packaged = <Package size='20px'/>
const shoppingCart=< ShoppingCart size='20px'/>


const data=[
    { id:'33462',  name:'Teaji  Fertilisers Ltd' },
    {id:'37312', name: ' Geray Agribusiness Ltd'  },
    { id:'39212',  name: ' Cesay Equipment Ltd' },
    { id:'33902',  name: ' CLay Seeds Ltd', },
    { id:'49212',  name: ' Waky Machinery Ltd', },
    { id:'34902',  name: ' CPlar Ltd', },
    { id:'39412',  name: ' Yevwa Ltd',},
    { id:'33942',  name: ' Poela Ltd',},
]

  const totals=[
    {title:'Pending Orders', number: 134, icon:shoppingCart, },
     {title: 'Inventory', number: 234000, icon:packaged} ,
    {title: 'Orders Shipped', number:34, icon:truck}, 
    {title: ' Amount Billed', number: 560070, icon:dollar}, 
]
  
const InputProvider =()=>{
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
   return getData();  
    }, [])
    
    return(
        <div className="gridroot">

            <div className='list'>
            <Grid data={totals}/>
            <List header='Orders due' data={profile}   pageSize={3} action='Ship'/>
            </div>
            <div className='sidelist'>
            <List header='Top Brands' data={data}   pageSize={5} action='Order' />
            </div>
            
        </div>
        )
  
}

export default InputProvider;
import React from 'react';
import {Grid, Space, Card,Row, Col, } from 'antd'


const {Meta}= Card

const TotalCard = ({totals}) => {
    const screens = Grid.useBreakpoint()
    return (
        < div style ={ screens.xs?{display:'flex', flexDirection:'column',
        justifyContent:'space-around', width:'250px'}:{display:'flex', flexDirection:'row',
                       justifyContent:'space-between'}}>
   { totals.map(total=>(
        <Card  style={{height:'100px'}}>
        <Meta 
        title= {total.title}
        description= {total.number}/>
        </Card > 
   ))

   }
      
     </ div>  
    );
}
 
export default TotalCard;


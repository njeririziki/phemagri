 import React from 'react';
 import { Card, Timeline} from 'antd'

 const {Item} = Timeline
 const Events = (props) => {
     return (  
     <Card title= {props.title} >
     <Timeline mode='left'>
        {props.events.map(item=>(
           <Item color= {item.color} key={item.id}
           label={item.issue}>
           <p> A recurring issue indicating a bug. </p>
         </Item>
         ))} 
     </Timeline>
     </Card>);
 }
  
 export default Events;
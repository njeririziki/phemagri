import React, {useState} from 'react';
import { Tag, List, Avatar, Typography, Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const EditableList = ({title,values,onDecline,onSaveEdit,setEditableText,setSelectedKey}) => {
    return ( 
        <List
        header={<Typography.Title level={4}>
               {title}
        </Typography.Title>}
        itemLayout="vertical"
        dataSource={values}
        rowKey={values.key}
        renderItem={item=> (
          <List.Item 
          actions={ item.Status !== 'verified'?[ 
           <Tag color='blue'>
           {item.Status}
         </Tag>,
           <Button
           type='dashed'
           onClick={onSaveEdit}>
                    Save Edit
                   </Button>,  
             <Button
             style={{ backgroundColor:'#f05545',color:'#ffffff',}}
             type='default'
           onClick={()=>onDecline(item.key,'declined')}
         >
           Decline
         </Button> ,
          <Button
          style={{ backgroundColor:'#88c399',color:'#ffffff'}}
          type='default'
          onClick={()=>onDecline(item.key,'verified')}>
                    Verify
                    </Button>]
                    :[
                     <Tag color='green'>
                     {item.Status}
                   </Tag>
                    ]}  >
                    <List.Item.Meta 
                     avatar= {<Avatar  size={64} icon={<UserOutlined />} />}
                       title={item.Title}  
                            
                   description= {
                     <Typography.Text
                     style={{color:'#00766c'}}>
                     Post by {item.Author? item.Author :'anonymous'}<br/>
                     {item.postTime}
                       </Typography.Text>
                     }/>
             
              <Typography.Text 
                editable={item.Status !== 'verified'?{
                  onStart: setSelectedKey(item.key),
                  onChange: (e)=>setEditableText(e),
                }:false}
               >
              {item.Content} 
                  </Typography.Text> 
          
         
         
              </List.Item>)}
   
      />
      );
}
 
export default EditableList;